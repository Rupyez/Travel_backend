import { HttpStatus } from "../constant/constant.js";
import successResponseData from "../helper/sucessResponseData.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import { tripinfoService } from "../service/index.js";

export const createTripInfo = catchAsyncError(async(req,res) => {
    let body = req.body
    let data = await tripinfoService.createTripInfoService({data:body})
    successResponseData({
        res : res,
        message : "Trip Info created sucessfully",
        status : HttpStatus.CREATED,
        data
    })
})

export const getSpecifiedTripInfo = catchAsyncError(async(req,res) => {
    let id = req.params.id
    let data = await tripinfoService.getSpecifiedTripInfoService({id})
    if(!data){
        let error = new Error("Trip Info Not Found")
        error.status = HttpStatus.NOT_FOUND
        throw error
    }
    successResponseData({
        res : res,
        message : "Specified Trip Info Found",
        status : HttpStatus.OK,
        data
    })
})

export const getAllTripInfo = catchAsyncError(async(req,res,next) => {
    let find = {}
    req.find = find 
    req.service = await tripinfoService.getAllTripInfoService
    next()
})

export const updateTripInfo = catchAsyncError(async(req,res,next) => {
    let body = req.body
    let id = req.params.id
    let data = await tripinfoService.updateTripInfoService({data : body,id})
    successResponseData({
        res : res,
        message : `Trip Info with these ${id} updated sucessfully`,
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const deleteTripInfo = catchAsyncError(async(req,res,next) => {
    let id = req.params.id
    let data = await tripinfoService.deleteTripInfoService({id})
    successResponseData({
        res : res,
        message : `Trip Info with this ${id} deleted sucessfully`,
        statusCode : HttpStatus.OK,
        data
    })
})