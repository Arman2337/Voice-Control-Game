import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/UserModel.js';
import transporter from '../config/nodemailer.js';
import { EMAIL_VERIFY_TEMPLATE, PASSWORD_RESET_TEMPLATE } from '../config/emailTemplets.js';


export const register = async (req, res)=>{

    const{name, email, password} = req.body;
    if(!name || !email || !password){
        return res.json({success:false,message:"Missing Details"});
    }

    try{
        const existingUser = await userModel.findOne({email})

        if(existingUser){
            return res.json({success:false, message:"User already exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new userModel({
            name,
            email,
            password: hashedPassword
        })
        await user.save()

        //+++++++++++++++++ Now Generate Token For Auth++++++++++++++++++++++++

        //we are send this token using cookie.
         const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY, {expiresIn: '1d'})

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 1*24*60*60*1000
        });

        //we are send wellcome email to user...
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Welcome to our site',
            text: `Hello ${name}, Welcome to our site. 
            We are happy to see you here.Your account has been created successfully with email id: ${email}.`

        }
        await transporter.sendMail(mailOptions)

        return res.json({success:true, })


    } catch(err) {
        res.json({success:false, messsage: err.message})
    }
}

export const login = async(req, res)=>{
    const {email, password} = req.body;

    if(!email || !password){
        return res.json({success:false, message:"Email and Password are required"});
    }

    try {
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false, message:"Invalid Email"})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid){
            return res.json({success:false, message:"Invalid Password"})
        }

        //if password is Matched then generate token.
         //we are send this token using cookie.


         const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY, {expiresIn: '1d'})

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 1*24*60*60*1000
        });

        return res.json({success:true, })

    } catch(err) {
        res.json({success:false, messsage: err.message}) 
    }
}

export const logout = (req, res)=>{
    try {
        res.clearCookie('token',{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });
        return res.json({success:true, message:"Logged Out"})
    }catch (err) {
        res.json({success:false, messsage: err.message})
    }
}


//Send verification OPT to user email
export const sendVerifyOtp = async(req, res)=>{
    try {
        //fist we get the user id to verify the user.
        const {userId} = req.body;

        const user = await userModel.findById(userId)
        if(user.isAccountVerified){
            return res.json({success:false, message:"Account already verified"})
        }

        //generate OTP send user email.
        const otp = String(Math.floor(100000 + Math.random() * 900000)) //6 digits random number
        user.verifyOtp = otp
        user.verifyOtpExpireAt = Date.now() + 24*60*60*1000 //1day
        await user.save()

        //now send otp to user email.
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Account Verification OTP',
            // text: `Hello ${user.name}, Your OTP for account verification is ${otp}. It will expire in 1 day`,
            html: EMAIL_VERIFY_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}", user.email)
        }
        //send email
        await transporter.sendMail(mailOptions)

        return res.json({success:true, message:"Verification OTP sent to your email"})

    }catch(err) {
        res.json({success:false, messsage: err.message})
        
    }
}


//Verify OTP and update user account to verified
export const verifyEmail = async(req, res)=>{
    const {userId, otp} = req.body;
    if(!userId || !otp){
        return res.json({success:false, message:"Missing Details"})
    }

    try {
        const user = await userModel.findById(userId)

        if(!user){
            return res.json({success:false, message:"User not found"})
        }

        if(user.verifyOtp === '' || user.verifyOtp!== otp){
            return res.json({success:false, message:"Invalid OTP"})
        }

        if(user.verifyOtpExpireAt < Date.now()){
            return res.json({success:false, message:"OTP expired. Please request a new OTP"})
        }

        user.isAccountVerified = true
        user.verifyOtp = ''
        user.verifyOtpExpireAt = 0
        await user.save()

        return res.json({success:true, message:"Account verified successfully"})
    }catch(err) {
        return res.json({success:false, message: err.message})
    }
}


//check user is Authenticated or not.
export const isAuthenticated = async(req, res)=>{
    try {
        return res.json({success:true})
    }catch(error) {
        return res.json({success:false, message: error.message})
    }
}

//send RESET PASSWORD OTP to user email
export const sendRestOtp = async(req, res)=>{
    const {email} = req.body;
    if(!email){
        return res.json({success:false, message:"Email is required"})
    }

    try {
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false, message:"User not found"})
        }
                //generate OTP send user email.
                const otp = String(Math.floor(100000 + Math.random() * 900000)) //6 digits random number
                user.resetOtp = otp
                user.resetOtpExpireAt = Date.now() + 15*60*1000 //15 minutes
                await user.save()
        
                //now send otp to user email.
                const mailOptions = {
                    from: process.env.SENDER_EMAIL,
                    to: user.email,
                    subject: 'Password Reset OTP',
                    // text: `Hello ${user.name}, Your OTP for password reset is ${otp}. It will expire in 15 minutes`
                    html: PASSWORD_RESET_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}", user.email)
                }
                //send email
                await transporter.sendMail(mailOptions)

                return res.json({success:true, message:"Password Reset OTP sent to your email"})
        
    }catch(err) {
        return res.json({success:false, message: err.message})
    }
}

//Verify OTP and update user password
export const resetPassword = async(req, res)=>{
    const {email, otp, newPassword} = req.body;
    if(!email || !otp || !newPassword){
        return res.json({success:false, message:"Email, OTP and New Password required"})
    }

    try {
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success:false, message:"User not found"})
        }

        if(user.resetOtp === '' || user.resetOtp!== otp){
            return res.json({success:false, message:"Invalid OTP"})
        }

        if(user.resetOtpExpireAt < Date.now()){
            return res.json({success:false, message:"OTP expired. Please request a new OTP"})
        }

        //if OTP is valid.
        const hashedPassword = await bcrypt.hash(newPassword, 10)
        user.password = hashedPassword
        user.resetOtp = ''
        user.resetOtpExpireAt = 0
        await user.save()

        return res.json({success:true, message:"Password has been reset successfully"})
    }catch(err) {
        return res.json({success:false, message: err.message})
    }
}




// // controllers/AuthController.js
// import jwt from 'jsonwebtoken';
// import userModel from '../models/UserModel.js';

// export const login = async (req, res) => {
//   const { googleId, name, email } = req.body;

//   try {
//     // Check if user exists
//     let user = await userModel.findOne({ email });

//     if (!user) {
//       // Create a new user if they don't exist
//       user = new userModel({
//         name,
//         email,
//         googleId,
//       });
//       await user.save();
//     }

//     // Create JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       maxAge: 3600000,  // 1 hour
//     });

//     return res.status(200).json({
//       success: true,
//       message: "User logged in successfully",
//       user: user,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Something went wrong",
//       error: error.message,
//     });
//   }
// };
