import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import { userRouter } from './routers/user.router.js';
import { productRouter } from './routers/product.router.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoDB Connected');
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    })
}).catch(error => {
    console.log(error);
})