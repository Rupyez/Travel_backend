import { Router } from "express";
import { inquiryController } from "../controller/index.js";
import { sortFilterPagination } from "../middleware/sortSelectPage.js";

const inquiryRouter = Router()

inquiryRouter
.route("/")
.post(inquiryController.createInquiry)
.get(inquiryController.getAllInquiry,sortFilterPagination)

inquiryRouter
.route("/:id")
.get(inquiryController.getSpecifiedInquiry)
.put(inquiryController.updateInquiry)
.delete(inquiryController.deleteInquiry)

export default inquiryRouter