import { Router } from "express";
import { aboutController } from "../controller/index.js";


const aboutRouter = Router()

aboutRouter
.route("/")
.post(aboutController.createAbout)

aboutRouter
.route("/:id")
.get(aboutController.getSpecifiedAbout)
.put(aboutController.updateAbout)
.delete(aboutController.deleteAbout)


export default aboutRouter;

