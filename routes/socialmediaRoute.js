import { Router } from "express";
import { socialmediaController } from "../controller/index.js";

const socialmediaRouter = Router()

socialmediaRouter
.route("/")
.post(socialmediaController.createSocialMedia)

export default socialmediaRouter;