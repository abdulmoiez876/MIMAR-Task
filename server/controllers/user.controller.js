import usersModel from "../models/users.model.js";
import joi from "joi";

const userSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
    seller: joi.boolean().required(),
})

export const signup = async (req, res) => {
    try {
        const { error } = userSchema.validate(req.body);
        if (error) return res.status(400).send({ message: error.message });
        const user = await usersModel.create(req.body);
        return res.status(201).send({ message: "User created successfully", user });
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const { error } = userSchema.validate(req.body);
        if (error) return res.status(400).send({ message: error.message });
        const user = await usersModel.findOne(req.body);
        if (!user) return res.status(400).send({ message: "User not found" });
        return res.status(200).send({ message: "User logged in successfully", user });
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
}