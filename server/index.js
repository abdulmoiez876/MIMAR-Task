import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoDB Connected');
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    })
}).catch(error => {
    console.log(error);
})