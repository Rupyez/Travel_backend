import { Router } from "express";
import { createActivities, getAllActivities, getSpecifiedActivities} from "../controller/activitiesController.js";

const router = Router()

router.post('/add',createActivities)
router.get('/:id',getSpecifiedActivities)
router.get('/all',getAllActivities)

export default router;