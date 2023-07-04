import { Router } from "express";
import { createAbout, getAllAbout, getSpecifiedAbout } from "../controller/aboutController.js";

const router = Router()

router.post("/add", createAbout)
router.get("/:id",getSpecifiedAbout)
router.get("/all",getAllAbout)

export default router;