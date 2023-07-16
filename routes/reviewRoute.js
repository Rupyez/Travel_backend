import { Router } from "express";
import { reviewController } from "../controller/index.js";

const reviewRouter = Router()

reviewRouter
.route("/")
.post(reviewController.createReview)

reviewRouter
.route("/:id")
.get(reviewController.getSpecifiedReview)
.put(reviewController.updateReview)
.delete(reviewController.deleteReview)

export default reviewRouter