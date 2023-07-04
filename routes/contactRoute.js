import { Router } from "express";
import { createContact, getAllContact, getSpecifiedContact } from "../controller/contactController.js";

const router = Router()

router.post("/add", createContact)
router.get("/:id",getSpecifiedContact)
router.get("/all",getAllContact)

export default router;