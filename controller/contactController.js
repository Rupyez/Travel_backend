import catchAsyncError from "../middleware/catchAsyncError.js";
import { contactService } from "../service/index.js";

export const createContact = catchAsyncError(async(req,res)=> {
    let body = req.body
    let data = await contactService.createContactService({data:body})
    res.status(200).json({data})
})

export const getSpecifiedContact = catchAsyncError(async(req,res) => {
    let id = req.params.id
    let data = await contactService.getSpecifiedContactService({data:id})
    res.status(200).json(data)
})

export const getAllContact = catchAsyncError(async(req,res,next) => {
    let find = {}
    req.find = find
    req.service = contactService.getAllContactService
    next()
})


