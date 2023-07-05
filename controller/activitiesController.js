import catchAsyncError from "../middleware/catchAsyncError.js";
import { activitiesService } from "../service/index.js";

export const createActivities = catchAsyncError(async(req,res) => {
    let body = req.body
    let data = await activitiesService.createActivitiesService({data:body})
    res.status(200).json({data})
})

export const getSpecifiedActivities = catchAsyncError(async(req,res) => {
    let id = req.params.id
    let data = await activitiesService.getSpecifiedActivitiesService({data:id});
    res.status(200).json({data})
})

export const getAllActivities = catchAsyncError(async(req,res,next) => {
    let find = {}
    req.find = find
    req.service = activitiesService.getAllActivities
    next()
})