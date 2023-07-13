import { Router } from "express";
import { activitiesController } from "../controller/index.js";

const activitiesRouter = Router()

activitiesRouter
.route("/")
.post(activitiesController.createActivities)

activitiesRouter
.route("/:id")
.get(activitiesController.getSpecifiedActivities)
.put(activitiesController.updateActivities)
.delete(activitiesController.deleteActivities)

export default activitiesRouter;