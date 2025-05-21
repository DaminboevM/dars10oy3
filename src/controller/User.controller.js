import { UserService } from "../service/User.service.js";

class UserController {
    constructor(){}

    async register (req, res, next) {
        try {
            const dataToken = {
            userIp: req.ip,
            userAgent: req.headers['user-agent']
            }
            const result = await UserService.UserRegister(req.body, dataToken)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }


    async login (req, res, next) {
        try {
            const dataToken = {
            userIp: req.ip,
            userAgent: req.headers['user-agent']
            }
            const result = await UserService.UserLogin(req.body, dataToken)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }


    async getusers (req, res, next) {
        try {   
            const result = await UserService.ReadUsetrs()
            res.status(201).json(result)
        } catch (error) {            
            next(error)
        }
    }
    
    
    async deleteUser (req, res, next) {
        try {   
            const result = await UserService.removeUsetrs(req.params.id)
            res.status(201).json(result)
        } catch (error) {            
            next(error)
        }
    }
}


const userController = new UserController()

export default userController