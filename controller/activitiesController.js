import { HttpStatus } from "../constant/constant.js";
import successResponseData from "../helper/sucessResponseData.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import { activitiesService } from "../service/index.js";
import { Category } from "../schemaModel/model.js"; 

export const createActivities = catchAsyncError(async(req,res) => {
    let body = req.body
    let data = await activitiesService.createActivitiesService({data:body})

    // Category
    const category = await Category.findById(req.body.Category)
    if(!category){
        return res.status(400).json({success : false,
        category})
    }

    successResponseData({
        res : res,
        message : "Activities is created sucessfully",
        statusCode : HttpStatus.CREATED,
        data 
    })
})

export const getSpecifiedActivities = catchAsyncError(async(req,res) => {
    let id = req.params.id
    let data = await activitiesService.getSpecifiedActivitiesService({id});
    if(!data){
        let error = new Error("Activities Page Not Found")
        error.statusCode = HttpStatus.NOT_FOUND
        throw error 
    }
    successResponseData({
        res: res,
        message : "Specified Activities Page Found",
        statusCode : HttpStatus.OK,
        data
    })
})

export const getAllActivities = catchAsyncError(async(req,res,next) => {
    let find = {}
    req.find = find
    req.service = activitiesService.getAllActivities
    next()
})

export const updateActivities = catchAsyncError(async(req,res,next) => {
    let body = req.body
    let id = req.params.id
    let data = await activitiesService.updateActivitiesService({data : body,id })
    successResponseData({
        res : res,
        message : `Activities with these ${id} updated succussfully`,
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const deleteActivities = catchAsyncError(async(req,res,next) => {
    let id = req.params.id
    let body = await activitiesService.deleteActivitiesService({id})
    successResponseData({
        res : res,
        message : `Activities with these ${id} deleted successfully`,
        statusCode : HttpStatus.OK,
        data
    })
})