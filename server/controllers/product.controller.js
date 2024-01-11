import joi from 'joi';
import productsModel from '../models/products.model.js';

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
        const product = await productsModel.create({ ...req.body, image: `http:localhost:8000/uploads/${req.file.filename}` })
        if (product) return res.status(201).send({ message: "Product created successfully", product });
        return res.status(500).send({ message: "Something went wrong" });
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
}