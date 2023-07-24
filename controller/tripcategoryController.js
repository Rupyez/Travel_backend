import { HttpStatus } from "../constant/constant.js";
import successResponseData from "../helper/sucessResponseData.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import { tripcategoryService } from "../service/index.js"

export const createTripCategory = catchAsyncError(async(req,res) => {
    let body = req.body
    let data = await tripcategoryService.createTripCategoryService({data:body})

    successResponseData({
        res : res,
        message : "TripCategory is created successfully",
        statusCode : HttpStatus.CREATED,
        data 
    })
})

export const getSpecifiedTripCategory = catchAsyncError(async(req,res) => {
    let id = req.params.id
    let data = await tripcategoryService.getSpecifiedTripCategoryService({id});
    if(!data){
        let error = new Error("TripCategory Page Not Found")
        error.statusCode = HttpStatus.NOT_FOUND
        throw error 
    }
    successResponseData({
        res: res,
        message : "Specified TripCategory Page Found",
        statusCode : HttpStatus.OK,
        data
    })
})

export const getAllTripCategory = catchAsyncError(async(req,res,next) => {
    let find = {}
    req.find = find
    req.service = await tripcategoryService.getAllTripCategoryService
    next()
})

export const updateTripCategory = catchAsyncError(async(req,res,next) => {
    let body = req.body
    let id = req.params.id
    let data = await tripcategoryService.updateTripCategoryService({data : body,id })
    successResponseData({
        res : res,
        message : `TripCategory with these ${id} updated successfully`,
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const deleteTripCategory = catchAsyncError(async(req,res,next) => {
    let id = req.params.id
    let data = await tripcategoryService.deleteTripCategoryService({id})
    successResponseData({
        res : res,
        message : `TripCategory with these ${id} deleted successfully`,
        statusCode : HttpStatus.OK,
        data
    })
})