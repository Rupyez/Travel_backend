import { HttpStatus } from "../constant/constant.js";
import successResponseData from "../helper/sucessResponseData.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import { inquiryService } from "../service/index.js";

export const createInquiry = catchAsyncError(async(req,res) => {
    let body = req.body
    let data = await inquiryService.createInquiryService({ data: body })
    successResponseData({
        res : res,
        message : "Inquiry page created successfully",
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const getSpecifiedInquiry = catchAsyncError(async(req,res) => {
    let id = req.params.id
    let data = await inquiryService.getSpecifiedInquiryService({id})
    if(!data){
        let error = new Error("Inquiry Page is Not Found")
        error.statusCode = HttpStatus.NOT_FOUND
        throw error 
    }
    successResponseData({
        res: res,
        message:"Specified Inquiry Page Found",
        statusCode : HttpStatus.OK,
        data
    })
})

export const getAllInquiry = catchAsyncError(async(req,res,next) => {
    let find = {}
    req.find = find
    req.service = await inquiryService.getAllInquiryService
    next()
})

export const updateInquiry = catchAsyncError(async(req,res,next) =>{
    let body = req.body
    let id = req.params.id
    let data = await inquiryService.updateInquiryService({data : body,id })
    successResponseData({
        res : res,
        message : `Inquiry with these ${id} updated successfully`,
        statusCode : HttpStatus.OK,
        data
    })
})

export const deleteInquiry = catchAsyncError(async(req,res,next) => {
    let id = req.params.id
    let data = await inquiryService.deleteInquiryService({id})
    successResponseData({
        res : res,
        message : `Inquiry with this ${id} deleted successfully`,
        statusCode : HttpStatus.OK,
        data
    })
})