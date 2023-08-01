import { Router } from "express";
import { TripInfo } from "../schemaModel/model.js";

const searchfeatureRouter = Router()

searchfeatureRouter.get("",async(req,res) => {
    const { keyword } = req.query;
    try {
        const tripinfos = await TripInfo.find({
            $or : [
                { heading :{ $regex: keyword , $options:'i'}}
            ],
        })
        res.json(tripinfos)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

export default searchfeatureRouter