import { Router } from "express";
import { activitiesController } from "../controller/index.js";
import { sortFilterPagination } from "../middleware/sortSelectPage.js";

const activitiesRouter = Router()

activitiesRouter
.route("/")
.post(activitiesController.createActivities)
.get(activitiesController.getAllActivities, sortFilterPagination)

activitiesRouter
.route("/:id")
.get(activitiesController.getSpecifiedActivities)
.put(activitiesController.updateActivities)
.delete(activitiesController.deleteActivities)

export default activitiesRouter;