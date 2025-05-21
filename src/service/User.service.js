import UserModel from "../module/User.module.js";
import CustomError from "../utils/CustomeError.js";
import jwt from "../utils/jwt.js";
import { Validation } from "../validator/validate.js";
import bcrypt from 'bcrypt'

export class UserService {
    constructor() {}

    static async UserRegister (body, dataToken) {
        try {
            const {error}  = Validation.registerSchema.validate(body)
            if(error) throw new CustomError(`Validate Error ${error.message}`, 400)
                
            body.password = await bcrypt.hash(body.password, 10)

            await UserModel.create(body)
            const paylaod = {email: body.email, userIp: dataToken.userIp, userAgent: dataToken.userAgent}

            return {
                accessToken: jwt.sign(paylaod, process.env.JWT_SECRET,{expiresIn:process.env.JWT_REF}),
                refreshToken: jwt.signRef(paylaod, process.env.JWT_SECRET,{expiresIn: process.env.JWT_ACC})
            }

        } catch (error) {
            throw new CustomError(error.message || 'Internal server error', error.status || 500)
        }
    }
    
    
    
    static async UserLogin (body, dataToken) {
        try {

            const {error}  = Validation.loginSchema.validate(body)
            if(error) throw new CustomError(`Validate Error ${error.message}`, 400)

            const user = await UserModel.findOne({email: body.email})
            const deshif = bcrypt.compare(body.password, user.password)
            
            if(!deshif) throw new CustomError('Invalid password or email !', 400)

            const paylaod = {email: body.email, userIp: dataToken.userIp, userAgent: dataToken.userAgent}

            return {
                accessToken: jwt.sign(paylaod, process.env.JWT_SECRET,{expiresIn:process.env.JWT_REF}),
                refreshToken: jwt.signRef(paylaod, process.env.JWT_SECRET,{expiresIn: process.env.JWT_ACC})
            }

        } catch (error) {
            throw new CustomError(error.message || 'Internal server error', error.status || 500)
        }
    }



    static async ReadUsetrs () {
        const users = UserModel.find()
        return users
    }
    
    
    static async removeUsetrs (id) {
        await UserModel.findByIdAndDelete(id)
        return 'User succses deleted !'
    }



}