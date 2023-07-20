import { Router } from "express";
import { userController } from "../controller/index.js";


const userRouter = Router()

userRouter
.route("/register")
.post(userController.createUser)

userRouter
.route("/login")
.post(userController.loginUser)

userRouter
.route("/logout")
.post(userController.logoutUser)


export default userRouter;

