import bcrypt from 'bcryptjs';

export const hashPassword = async(password) =>{
    try {
        const salt = 10;
        const hashPass = await bcrypt.hash(password , salt);
        return hashPass;
        
    } catch (error) {
        console.log(error);
    }
}

export const comparePassword = async (password , hashPass)=>{
    try {
        return bcrypt.compare(password , hashPass);
    } catch (error) {
        console.log(error);
    }
}