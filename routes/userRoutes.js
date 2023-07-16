import { Router } from "express";
import { userController } from "../controller/index.js";


const userRouter = Router()

userRouter
.route("/")
.post(userController.createUser)


export default userRouter;

