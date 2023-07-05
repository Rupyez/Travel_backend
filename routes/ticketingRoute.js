import { Router } from "express";
import { createTicketing, getSpecifiedTicketing, getAllTicketing } from "../controller/ticketingController.js";

const router = Router();

router.post("/add",createTicketing)
router.get("/:id",getSpecifiedTicketing)
router.get("/all",getAllTicketing)

export default router