import { Router } from "express";

import {
    signup,
    login
} from '../controllers/user.controller.js';

export const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);