import userModel from '../models/UserModel.js';

export const getUserData = async(req, res)=>{
    try {
        const {userId} = req.body;
        const user = await userModel.findById(userId);

        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json({
            success: true,
            userData:{
                name: user.name, 
                id: user._id,
                email: user.email,
                isAccountVerified: user.isAccountVerified,
            }
        });
    }catch (err) {
        return res.status(500).json({message: err.message});
    }
}