import { HttpStatus } from "../constant/constant.js";
import successResponseData from "../helper/sucessResponseData.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import { tripbookingService } from "../service/index.js";
import { TripCategory } from "../schemaModel/model.js";

export const createTripBooking = catchAsyncError(async(req,res) => {
    let body = req.body
    let data = await tripbookingService.createTripBookingService({data:body})

    // populating TripCategory in tripbooking
    const tripCategory = await TripCategory.findById(req.body.TripCategory)
    if(!tripCategory){
        return res.status(400).json({ success : false,
        tripCategory})
    }

    successResponseData({
        res : res,
        message : "Trip Booking created Successfully",
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const getSpecifiedTripBooking = catchAsyncError(async(req,res) => {
    let id = req.params.id
    let data = await tripbookingService.getSpecifiedTripBookingService({id})
    if(!data){
        let error = new Error("Trip Booking not found")
        error.status = HttpStatus.NOT_FOUND
        throw error;
    }
    successResponseData({
        res : res,
        message : "Specified Trip Booking Found",
        statusCode : HttpStatus.OK,
        data
    })
})

export const getAllTripBooking = catchAsyncError(async(req,res,next) =>{
    let find = {}
    req.find = find
    req.service = await tripbookingService.getAllTripBookingService
    next()
})

export const updateTripBooking = catchAsyncError(async(req,res,next) => {
    let body = req.body 
    let id = req.params.id
    let data = await tripbookingService.updateTripBookingService({ data : body,id })
    successResponseData({
        res : res,
        message : `Trip Booking with ${id} updated sucessfully`,
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const deleteTripBooking = catchAsyncError(async(req,res,next) => {
    let id = req.params.id
    let data = await tripbookingService.deleteTripBookingService({id})
    successResponseData({
        res : res,
        message : `Trip Booking with this ${id} deleted sucessfully`,
        statusCode : HttpStatus.OK,
        data
    })
})
