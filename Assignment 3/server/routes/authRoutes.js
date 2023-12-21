import express from 'express'
import {loginController, registerController, testController} from '../controllers/authController.js'
import { isAdmin, requiredSignin } from '../middlewares/authMiddleware.js';

const router = express.Router();

//Routings

// Register Router | POST

router.post('/register' , registerController);

// Login Router | POST

router.post('/login', loginController);

// test route | GET

router.get('/test', requiredSignin , isAdmin , testController);

export default router;

