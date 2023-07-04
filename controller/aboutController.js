import catchAsyncError from "../middleware/catchAsyncError.js";
import { aboutService } from "../service/index.js";

export const createAbout = catchAsyncError(async(req,res)=> {
    let body = req.body
    let data = await aboutService.createAboutService({data:body})
    res.status(200).json({data})
})

export const getSpecifiedAbout = catchAsyncError(async(req,res) =>{
    let id = req.params.id
    let data = await aboutService.getSpecifiedAboutService({data:id})
    res.status(200).json(data)
})

export const getAllAbout = catchAsyncError(async(req,res,next) =>{
    let find = {}
    req.find = find
    req.service = aboutService.getAllAboutService
    next()
})

