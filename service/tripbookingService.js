import { TripBooking } from "../schemaModel/model.js";

export const createTripBookingService = async({data}) => TripBooking.create(data) 

export const getSpecifiedTripBookingService = async({id}) => TripBooking.findById(id).populate("TripInfo")

export const getAllTripBookingService = async({
    find = {},
    sort = "",
    limit = "",
    skip = "",
    select = ""
}) => TripBooking.find(find).sort(sort).limit(limit).skip(skip).select(select).populate("TripInfo")

export const updateTripBookingService = async({id,data}) => TripBooking.findByIdAndUpdate(id,data,{
    new : true,
    runValidators : true
})

export const deleteTripBookingService = async({id}) => TripBooking.findByIdAndDelete(id)