import { Router } from "express";
import userController from "../controller/User.controller.js";
import chekToken from "../middleware/chekToken.js";

const UserRouter = Router()

UserRouter
    .post('/register', userController.register)
    .post('/login', userController.login)
    .get('/all', chekToken, userController.getusers)
    .delete('/delete/:id', userController.deleteUser)



export default UserRouter