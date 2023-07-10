import { Router } from "express";
import { categoryController } from "../controller/index.js";

const categoryRouter = Router()

categoryRouter
.route("/")
.post(categoryController.createCategory)

categoryRouter
.route("/:id")
.get(categoryController.getSpecifiedCategory)
.put(categoryController.updateCategory)
.delete(categoryController.deleteCategory)

export default categoryRouter;