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


// import jwt from 'jsonwebtoken';

// const userAuth = async (req, res, next) => {
//     try {
//         // Try to get token from Authorization header first
//         const authHeader = req.headers.authorization;
//         let token = authHeader && authHeader.split(' ')[1]; // Bearer <token>
        
//         // If no header token, fall back to cookies
//         if (!token && req.cookies.token) {
//             token = req.cookies.token;
//         }

//         // No token found in either location
//         if (!token) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Authorization required. Please login."
//             });
//         }

//         // Verify the token
//         const tokenDecode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
//         // Validate token structure
//         if (!tokenDecode?.id) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Invalid token format. Please login again."
//             });
//         }

//         // Attach user ID to request object
//         req.user = { id: tokenDecode.id };
//         next();

//     } catch (error) {
//         console.error("Authentication error:", error.message);
        
//         // Handle specific JWT errors
//         if (error.name === 'TokenExpiredError') {
//             return res.status(401).json({
//                 success: false,
//                 message: "Session expired. Please login again."
//             });
//         }
        
//         if (error.name === 'JsonWebTokenError') {
//             return res.status(401).json({
//                 success: false,
//                 message: "Invalid token. Please login again."
//             });
//         }

//         // Generic error response
//         return res.status(500).json({
//             success: false,
//             message: "Authentication failed. Please try again."
//         });
//     }
// };

// export default userAuth;