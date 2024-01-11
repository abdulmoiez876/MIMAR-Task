import { Router } from 'express';
import {
    createProduct,
    getAllProducts
} from '../controllers/product.controller.js';
import { upload } from '../config/multer.config.js';

export const productRouter = Router();

productRouter.post('/createProduct', upload.single('image'),createProduct);
productRouter.get('/getAllProducts', getAllProducts);