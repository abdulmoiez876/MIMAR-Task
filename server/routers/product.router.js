import { Router } from 'express';
import {
    createProduct
} from '../controllers/product.controller.js';
import { upload } from '../config/multer.config.js';

export const productRouter = Router();

productRouter.post('/createProduct', upload.single('image'),createProduct);