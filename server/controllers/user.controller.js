import usersModel from "../models/users.model.js";
import joi from "joi";

const signupSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
    seller: joi.boolean().required(),
})

export const signup = async (req, res) => {
    try {
        const { error } = signupSchema.validate(req.body);
        if (error) return res.status(400).send({ message: error.message });
        const user = await usersModel.create(req.body);
        return res.status(201).send({ message: "User created successfully", user });
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
}