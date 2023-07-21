import { Router } from "express";
import { socialmediaController } from "../controller/index.js";
import { sortFilterPagination } from "../middleware/sortSelectPage.js";

const socialmediaRouter = Router()

socialmediaRouter
.route("/")
.post(socialmediaController.createSocialMedia)
.get(socialmediaController.getAllSocialMedia , sortFilterPagination)

socialmediaRouter
.route("/:id")
.get(socialmediaController.getSpecifiedSocialMedia)
.put(socialmediaController.updateSocialMedia)
.delete(socialmediaController.deleteSocialMedia)

export default socialmediaRouter;