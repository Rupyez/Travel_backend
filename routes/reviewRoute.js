import { Router } from "express";
import { reviewController } from "../controller/index.js";
import { sortFilterPagination } from "../middleware/sortSelectPage.js";

const reviewRouter = Router()

reviewRouter
.route("/")
.post(reviewController.createReview)
.get(reviewController.getAllReview , sortFilterPagination)

reviewRouter
.route("/:id")
.get(reviewController.getSpecifiedReview)
.put(reviewController.updateReview)
.delete(reviewController.deleteReview)

export default reviewRouter