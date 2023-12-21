import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imgUrl: {
        type: String, 
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Blog = mongoose.model("blog" , BlogSchema);
export default Blog;
