import catchAsyncError from "../middleware/catchAsyncError.js";
import { ticketingService } from "../service/index.js";

export const createTicketing = catchAsyncError(async(req,res) =>{
    let body = req.body
    let data = await ticketingService.createTicketingService({data:body})
    res.status(200).json(data)
})

export const getSpecifiedTicketing = catchAsyncError(async(req,res) => {
    let id = req.params.id
    let data = await ticketingService.getSpecifiedTicketingService({data:id})
    res.status(200).json(data)
})

export const getAllTicketing = catchAsyncError(async(req,res,next) => {
    let find = {}
    req.find = find
    req.service = ticketingService.getAllTicketingService
    next()
})