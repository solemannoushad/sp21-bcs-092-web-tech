import express from "express"
import dotenv from 'dotenv';
import imgRoute from "./routes/imgRoute.js"
import blogsRouter from './routes/blogs.js'
import authRoutes from './routes/authRoutes.js'
import cors from "cors"
import { connectToMongo } from "./config/db.js"

dotenv.config();
connectToMongo();
const app = express()
app.use(express.json());
const port = 8000


app.use(cors())
app.use('/api/img', imgRoute);
app.use('/api/blogs' , blogsRouter);
app.use('/api/auth', authRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})