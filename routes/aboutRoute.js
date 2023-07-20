import { Router } from "express";
import { aboutController } from "../controller/index.js";
import { sortFilterPagination } from "../middleware/sortSelectPage.js";


const aboutRouter = Router()

aboutRouter
.route("/")
.post(aboutController.createAbout)
.get(aboutController.getAllAbout, sortFilterPagination)

aboutRouter
.route("/:id")
.get(aboutController.getSpecifiedAbout)
.put(aboutController.updateAbout)
.delete(aboutController.deleteAbout)


export default aboutRouter;

