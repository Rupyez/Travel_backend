import { TripInfo } from "../schemaModel/model.js";

export const createTripInfoService = async({data}) => TripInfo.create(data)

export const getSpecifiedTripInfoService = async({id}) => TripInfo.findById(id)

export const getAllTripInfoService = async({
    find = {},
    sort = "",
    limit = "",
    skip = "",
    select = ""
}) => TripInfo.find(find).sort(sort).limit(limit).skip(skip).select(select)

export const updateTripInfoService = async({id,data}) => TripInfo.findByIdAndUpdate(id,data,{
    new : true,
    runValidators : true
})

export const deleteTripInfoService = async({id}) => TripInfo.findByIdAndDelete(id)