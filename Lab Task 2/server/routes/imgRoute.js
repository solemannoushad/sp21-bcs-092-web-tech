import express from "express"
import { imgController } from "../controllers/imgController.js";
import multer from "multer"

const router = express.Router();

// Set up storage for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post('/process', upload.single('image') , imgController);

export default router;