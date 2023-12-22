import express from "express"
import Calculator from '../models/Calculator.js'

const router = express.Router();

router.get('/', async (req, res)=>{
    try {
        const calculator = await Calculator.find();
        res.send(calculator);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occured");
        
    }
})

router.post('/addData', async (req, res) => {
    try {
        const { operand1, operand2, operation, result } = req.body;
        console.log(operand1)

        // Validate input data (add more validation as needed)
        if (!operand1 || !operand2 || !operation || !result) {
            return res.status(400).json({ error: "Bad Request", message: "Missing required fields." });
        }

        res.status(201).json(newEntry); // 201 Created status for successful creation
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Error Occurred", message: error.message });
    }
});


export default router;