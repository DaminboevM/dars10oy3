import UserModel from "../module/User.module.js"
import CustomError from "../utils/CustomeError.js"
import jwt from "../utils/jwt.js"

export default async (req, res, next) => {
    try {
        const { token } = req.headers
        if(!token) throw new CustomError('token is require !', 404)

        const {email, userIp, userAgent} = jwt.verify(token,process.env.JWT_SECRET)

        const user = UserModel.findOne({email})

        if(!user) throw new CustomError('User not found', 404)

        if(req.ip != userIp || req.headers['user-agent'] != userAgent) throw new CustomError('Invalid token', 400)

        req.user = user
        next()
    } catch (error) {
        if(error.name == 'TokenExpiredError') next(new CustomError('Token expire !', 400))

        if(error.name == 'JsonWebTokenError ') next(new CustomError('Invalid token', 400))

        next(error)
    }
}