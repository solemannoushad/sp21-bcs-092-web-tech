import JWT from 'jsonwebtoken';
import userModel from '../models/User.js';


export const requiredSignin = (req, res, next)=>{
    try {

        const decode = JWT.decode(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;

        next();
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Required login"
        })
    }
}

// admin middleware

export const isAdmin = async (req, res, next)=>{
    try {

        const user = await userModel.findById(req.user._id);
        if(user.role !== 1){
            return res.status(401).send({
                success: false,
                message: "Unauthorized access"
            })
        }else{
            next();
        }
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Unable to authorize"
        })
    }
}