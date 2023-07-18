import { Router } from "express";
import { socialmediaController } from "../controller/index.js";

const socialmediaRouter = Router()

socialmediaRouter
.route("/")
.post(socialmediaController.createSocialMedia)

socialmediaRouter
.route("/:id")
.get(socialmediaController.getSpecifiedSocialMedia)
.put(socialmediaController.updateSocialMedia)
.delete(socialmediaController.deleteSocialMedia)

export default socialmediaRouter;