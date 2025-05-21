import Joi from "joi";


export class Validation {
    constructor() {}

    static registerSchema = Joi.object({
        name: Joi.string().alphanum().required(),
        password: Joi.string().min(8).max(16).required(),
        age: Joi.number().min(0).required(),
        email: Joi.string().email().required()
    })


    static loginSchema = Joi.object({
        password: Joi.string().min(8).max(16).required(),
        email: Joi.string().email().required()
    })

    
}