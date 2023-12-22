import mongoose from "mongoose";

const CalculatorSchema = new mongoose.Schema({
    operand1:{
        type: Number,
        required: true
    },
    operand2:{
        type: Number,
        required: true
    },
    operation: {
        type: String, 
        required: true
    },
    result: {
        type: Number,
        required: true
    }
})

const Calculator = mongoose.model("calculator" , CalculatorSchema);
export default Calculator;
