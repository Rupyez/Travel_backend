import { Router } from "express";
import { tripinfoController } from "../controller/index.js";
import { sortFilterPagination } from "../middleware/sortSelectPage.js";

const tripinfoRouter = Router()

tripinfoRouter
.route("/")
.post(tripinfoController.createTripInfo)
.get(tripinfoController.getAllTripInfo , sortFilterPagination)

tripinfoRouter
.route("/:id")
.get(tripinfoController.getSpecifiedTripInfo)
.put(tripinfoController.updateTripInfo)
.delete(tripinfoController.deleteTripInfo)

export default tripinfoRouter;