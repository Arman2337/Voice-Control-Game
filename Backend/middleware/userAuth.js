//Why this middleware is needed ?
  

/*
In the sendVerifyOtp, verifyEmail in this two controller we are geeting
userId from req.body. but in ui we are sending userId.

so using middleware function we are getting token from cookie and 
we are getting userId from that token. 

*/


import jwt from 'jsonwebtoken';

const userAuth = async(req, res, next)=>{
    const {token} = req.cookies;

    if(!token){
        return res.json({success:false, message:"Not Authorized Login Again"})
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET_KEY)

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
        }else{
            return res.json({success:false, message:"Not Authorized Login Again"})
        }
        next()
    } catch(error) {
        return res.json({success:false, message:error.message})
    }
}

export default userAuth;

