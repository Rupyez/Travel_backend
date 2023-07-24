import { Router } from "express";
import { tripcategoryController } from "../controller/index.js"
import { sortFilterPagination } from "../middleware/sortSelectPage.js";

const tripcategoryRouter = Router()

tripcategoryRouter
.route("/")
.post(tripcategoryController.createTripCategory)
.get(tripcategoryController.getAllTripCategory, sortFilterPagination)

tripcategoryRouter
.route("/:id")
.get(tripcategoryController.getSpecifiedTripCategory)
.put(tripcategoryController.updateTripCategory)
.delete(tripcategoryController.deleteTripCategory)

export default tripcategoryRouter;