import { Router } from "express";
import { searchController } from "../controller/index.js";
import { sortFilterPagination } from "../middleware/sortSelectPage.js";

const searchRouter = Router()

searchRouter
.route("/")
.post(searchController.createSearch)
.get(searchController.getAllSearch , sortFilterPagination)

searchRouter
.route("/:id")
.get(searchController.getSpecifiedSearch)
.put(searchController.updateSearch)
.delete(searchController.deleteSearch)

export default searchRouter;