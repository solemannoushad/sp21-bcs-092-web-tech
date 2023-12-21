import express from "express"
import Blog from '../models/Blog.js'

const router = express.Router();

router.get('/', async (req, res)=>{
    try {
        const blogs = await Blog.find();
        res.send(blogs);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occured");
        
    }
})

router.get('/:id', async (req, res)=>{
    try {
        const blogs = await Blog.findById(req.params.id)
        res.send(blogs);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occured");
        
    }
})


router.post('/addBlog', async (req, res)=>{

    try {
        const {title, description, imgUrl} = req.body;
        const blogs = await Blog.create({
            title,
            description,
            imgUrl
        })
        res.send(blogs);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occured");
        
    }
})

router.delete('/deleteblog/:id', async(req , res)=>{

    try {
        let blog = await Blog.findById(req.params.id);
        if(!blog){
            return res.status(404).send("404 Not Found");
        }
        blog = await Blog.findByIdAndDelete(req.params.id);
        res.json({Success: "Note has been deleted Sussessfully" , blog: blog});
    } catch (error) {
        res.status(404).json({error: error.message});
    }

})


export default router;