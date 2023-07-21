import { Router } from "express";
import { tripbookingController } from "../controller/index.js";
import { sortFilterPagination } from "../middleware/sortSelectPage.js";

const tripbookingRouter = Router()

tripbookingRouter
.route("/")
.post(tripbookingController.createTripBooking)
.get(tripbookingController.getAllTripBooking , sortFilterPagination)

tripbookingRouter
.route("/:id")
.get(tripbookingController.getSpecifiedTripBooking)
.put(tripbookingController.updateTripBooking)
.delete(tripbookingController.deleteTripBooking)

export default tripbookingRouter;