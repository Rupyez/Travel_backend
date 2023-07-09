import { Router } from "express";
import { contactController } from "../controller/index.js";

const contactRouter = Router()

contactRouter
.route("/")
.post(contactController.createContact)

contactRouter
.route("/:id")
.get(contactController.getSpecifiedContact)
.put(contactController.updateContact)
.delete(contactController.deleteContact)

export default contactRouter;

