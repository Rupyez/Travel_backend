import { Router } from "express";
import { createTripBooking, deleteTripBooking, getAllTripBooking, getSpecifiedTripBooking, updateTripBooking } from "../controller/tripbookingController.js"

const router = Router()

router.post("/add",createTripBooking)
router.get(":/id",getSpecifiedTripBooking)
router.get("/all",getAllTripBooking)
router.put("update/:id",updateTripBooking)
router.delete("/delete/:id",deleteTripBooking)

export default router;