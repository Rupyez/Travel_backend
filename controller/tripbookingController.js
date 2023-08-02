import { HttpStatus } from "../constant/constant.js";
import successResponseData from "../helper/sucessResponseData.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import { tripbookingService } from "../service/index.js";
import { TripInfo } from "../schemaModel/model.js";
import { sendMail } from "../Utils/sendMail.js";
import { fromEmail } from "../config/config.js";

export const createTripBooking = catchAsyncError(async(req,res) => {
    let body = req.body
    let data = await tripbookingService.createTripBookingService({data:body})

    // populating Tripinfo in tripbooking
    const tripinfo= await TripInfo.findById(req.body.TripInfo)
    if(!tripinfo){
        return res.status(400).json({ success : false,
        tripinfo})
    }

    // sending mail while creating tripbooking
    await sendMail({
        from: `Trip Booking Confirmation<${fromEmail}>`,
        to: [req.body.email],
        subject: "Email Confirmation",
        html: `
        <div><h3>Mr./Mrs. ${req.body.full_name},</h3>
        <p>You have been successfully booked a Trip</p>
        <p>You will be contacted within 5 business days to update you about the further process and other related details</p>
        <p>Your booking details are as follows.</p>
        <p>Name: ${req.body.full_name}</p>
        <p>Email: ${req.body.email}</p>
        <p>Contact Number: ${req.body.contact_number}</p>
        </div>
        `,
    });

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
