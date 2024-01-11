import { Router } from "express";

import {
    signup
} from '../controllers/user.controller.js';

export const userRouter = Router();

userRouter.post('/signup', signup)