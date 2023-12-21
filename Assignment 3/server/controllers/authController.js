import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import userModel from '../models/User.js'
import JWT from 'jsonwebtoken'

export const registerController = async (req , res)=>{

    try {

        const {name , email , password , phone , address} = req.body;
        if(!name){
            return res.send({error: "Name is required"});
        }
        if(!email){
            return res.send({error: "Email is required"});
        }
        if(!password){
            return res.send({error: "Password is required"});
        }
        if(!phone){
            return res.send({error: "Phone is required"});
        }
        if(!address){
            return res.send({error: "Address is required"});
        }

        // Check if user already exists

        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(200).send({
                success: true,
                message: "User already registered"
            })
        }

        // hashing password

        const hashPass = await hashPassword(password);

        // Creating user
        
        const user = await new userModel({name, email, phone, address, password: hashPass}).save();
        return res.status(201).send({
            success: true,
            message: "User registered successfully",
            user
        })
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error
        })
    }

}

export const loginController = async (req , res)=>{
    try {

        const {email, password} = req.body;

        if(!email || !password){
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            })
        }

        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success: false,
                message: "Please Sign up to continue"
            })
        }

        const pass_match = await comparePassword(password, user.password);
        if(!pass_match){
            return res.status(200).send({
                success: false,
                message: "Invalid credentisls"
            })
        }

        const token = JWT.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        return res.status(200).send({
            success: true,
            message: "Logged in successfully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            },
            token
        })
        
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in login",
            error
        })
    }
}


export const testController = async (req , res)=>{
    try {

        res.send({
            message: "Authorization"
        })
        
    } catch (error) {
        res.send({error})
    }
}

