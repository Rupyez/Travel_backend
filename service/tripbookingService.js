import { TripBooking } from "../schemaModel/model.js";

export const createTripBookingService = async({data}) => TripBooking.create(data) 

export const getSpecifiedTripBookingService = async({id}) => TripBooking.findById(id).populate("TripCategory")

export const getAllTripBookingService = async({
    find = {},
    sort = "",
    limit = "",
    skip = "",
    select = ""
}) => TripBooking.find(find).sort(sort).limit(limit).skip(skip).select(select).populate("TripCategory")

export const updateTripBookingService = async({id,data}) => TripBooking.findByIdAndUpdate(id,data,{
    new : true,
    runValidators : true
})

export const deleteTripBookingService = async({id}) => TripBooking.findByIdAndDelete(id)