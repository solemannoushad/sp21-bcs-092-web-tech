import mongoose from 'mongoose'
const mongoURI = "mongodb+srv://solemannoushad31:Ra4MhiPOcVPzvP1W@cluster0.ksfqefa.mongodb.net/dipBlogs?retryWrites=true&w=majority";

export const connectToMongo = ()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI).then((success)=>{
        console.log("Connected to mongo")
    }).catch((err)=>{
        console.log(err)
    })
}
