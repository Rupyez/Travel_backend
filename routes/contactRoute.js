import { Router } from "express";
import { createContact, deleteContact, getAllContact, getSpecifiedContact, updateContact } from "../controller/contactController.js";

const router = Router()

router.post("/add", createContact)
router.get("/:id",getSpecifiedContact)
router.get("/all",getAllContact)
router.put("/update/:id",updateContact)
router.delete("/delete/:id",deleteContact)

export default router;