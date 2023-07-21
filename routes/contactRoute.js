import { Router } from "express";
import { contactController } from "../controller/index.js";
import { sortFilterPagination } from "../middleware/sortSelectPage.js";

const contactRouter = Router()

contactRouter
.route("/")
.post(contactController.createContact)
.get(contactController.getAllContact , sortFilterPagination)

contactRouter
.route("/:id")
.get(contactController.getSpecifiedContact)
.put(contactController.updateContact)
.delete(contactController.deleteContact)

export default contactRouter;

