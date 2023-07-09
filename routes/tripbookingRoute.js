import { Router } from "express";
import { tripbookingController } from "../controller/index.js";

const tripbookingRouter = Router()

tripbookingRouter
.route("/")
.post(tripbookingController.createTripBooking)

tripbookingRouter
.route("/:id")
.get(tripbookingController.getSpecifiedTripBooking)
.put(tripbookingController.updateTripBooking)
.delete(tripbookingController.deleteTripBooking)

export default tripbookingRouter;