import { HttpStatus } from "../constant/constant.js";
import successResponseData from "../helper/sucessResponseData.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import { contactService } from "../service/index.js";

export const createContact = catchAsyncError(async(req,res)=> {
    let body = req.body
    let data = await contactService.createContactService({data:body})
    successResponseData({
        res : res,
        message : "Contact Page created successfully",
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const getSpecifiedContact = catchAsyncError(async(req,res) => {
    let id = req.params.id
    let data = await contactService.getSpecifiedContactService({id})
    if(!data){
        let error = new Error("Contact Page Not Found")
        error.statusCode = HttpStatus.NOT_FOUND
        throw error
    }
    successResponseData({
        res : res,
        message : "Specified Contact Page Found",
        statusCode : HttpStatus.OK,
        data
    })
})

export const getAllContact = catchAsyncError(async(req,res,next) => {
    let find = {}
    req.find = find
    req.service = await contactService.getAllContactService
    next()
})

export const updateContact = catchAsyncError(async(req,res,next) => {
    let body = req.body
    let id = req.params.id
    let data = await contactService.updateContactService({data:body,id})
    successResponseData({
        res : res,
        message : `Contact with these ${id} has been updated successfully`,
        statusCode : HttpStatus.OK,
        data
    })
})

export const deleteContact = catchAsyncError(async(req,res,next) => {
    let id = req.params.id
    let data = await contactService.deleteContactService({id})
    successResponseData({
        res : res,
        message : `Contact with this ${id} deleted successfully`,
        statusCode : HttpStatus.OK,
        data
    })
})


