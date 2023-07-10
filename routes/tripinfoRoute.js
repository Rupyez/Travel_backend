import { Router } from "express";
import { tripinfoController } from "../controller/index.js";

const tripinfoRouter = Router()

tripinfoRouter
.route("/")
.post(tripinfoController.createTripInfo)

tripinfoRouter
.route("/:id")
.get(tripinfoController.getSpecifiedTripInfo)
.put(tripinfoController.updateTripInfo)
.delete(tripinfoController.deleteTripInfo)

export default tripinfoRouter;