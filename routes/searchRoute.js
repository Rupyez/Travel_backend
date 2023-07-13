import { Router } from "express";
import { searchController } from "../controller/index.js";

const searchRouter = Router()

searchRouter
.route("/")
.post(searchController.createSearch)

searchRouter
.route("/:id")
.get(searchController.getSpecifiedSearch)
.put(searchController.updateSearch)
.delete(searchController.deleteSearch)

export default searchRouter;