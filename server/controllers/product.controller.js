import joi from 'joi';
import productsModel from '../models/products.model.js';
import os from 'os';

const productSchema = joi.object({
    title: joi.string().required(),
    price: joi.number().required(),
    description: joi.string().required(),
    image: joi.string().required(),
})

export const createProduct = async (req, res) => {
    try {
        const { error } = productSchema.validate({ ...req.body, image: req.file.filename });
        if (error) return res.status(400).send({ message: error.message });
        const product = await productsModel.create({ ...req.body, image: `http://127.0.0.1:8000/uploads/${req.file.filename}` })
        if (product) return res.status(201).send({ message: "Product created successfully", product });
        return res.status(500).send({ message: "Something went wrong" });
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await productsModel.find();
        if (products) return res.status(200).send({ message: "Products fetched successfully", products });
        return res.status(500).send({ message: "Something went wrong" });
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
}