import { TripCategory } from "../schemaModel/model.js";

export const createTripCategoryService = async({data}) => TripCategory.create(data);

export const getSpecifiedTripCategoryService = async({id}) => TripCategory.findById(id)

export const getAllTripCategoryService = async({
    find = {},
    sort = "",
    limit = "",
    skip = "",
    select = ""
}) => TripCategory.find(find).sort(sort).limit(limit).skip(skip).select(select)

export const updateTripCategoryService = async({data,id}) => TripCategory.findByIdAndUpdate(id,data,{
    new : true,
    runValidators : true
})

export const deleteTripCategoryService = async({id}) => TripCategory.findByIdAndDelete(id)