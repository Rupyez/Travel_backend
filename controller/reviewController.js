import { HttpStatus } from "../constant/constant.js";
import successResponseData from "../helper/sucessResponseData.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import { reviewService } from "../service/index.js";

export const createReview = catchAsyncError(async(req,res,) => {
    let body = req.body
    let data = await reviewService.createReviewService({ data:body })
    successResponseData({
        res : res,
        message : "Review Page created sucessfully",
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const getSpecifiedReview = catchAsyncError(async(req,res) => {
    let id = req.params.id
    let data = await reviewService.getSpecifiedReviewService({id})
    if(!data){
        let error = new Error("Search Page Not Found")
        error.statusCode = HttpStatus.NOT_FOUND
        throw error
    }
    successResponseData({
        res : res,
        message : "Specified Review Page Found",
        statusCode : HttpStatus.OK,
        data
    })
})

export const getAllReview = catchAsyncError(async(req,res,next) => {
    let find = {}
    req.find = find
    req.service = await reviewService.getAllReviewService
    next()
})

export const updateReview = catchAsyncError(async(req,res,next) => {
    let body = req.body
    let id = req.params.id
    let data = await reviewService.updateReviewService({data : body,id })
    successResponseData({
        res: res,
        message : ` Review with these ${id} updated successfully`,
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const deleteReview = catchAsyncError(async(req,res,next) => {
    let id = req.params.id
    let data = await reviewService.deleteReviewService({id})
    successResponseData({
        res : res,
        message : `Review with this ${id} deleted sucessfully`,
        statusCode : HttpStatus.OK,
        data
    })
})