import { Router } from "express";
import UserRouter from "./User.routes.js";


const router = Router()

router.use('/user', UserRouter)

export default router