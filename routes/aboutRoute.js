import { Router } from "express";
import { createAbout, deleteAbout, getAllAbout, getSpecifiedAbout, updateAbout } from "../controller/aboutController.js";

const router = Router()

router.post("/add", createAbout)
router.get("/:id",getSpecifiedAbout)
router.get("/all",getAllAbout)
router.put("/update/:id",updateAbout)
router.delete("/delete/:id",deleteAbout)

export default router;