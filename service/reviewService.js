import { Review } from "../schemaModel/model.js";

export const createReviewService = async({data}) => Review.create(data)

export const getSpecifiedReviewService = async({id}) => Review.findById(id)

export const getAllReviewService = async({
    find = {},
    sort = "",
    limit = "",
    skip = "",
    select = ""
}) => Review.find(find).sort(sort).limit(limit).skip(skip).select(select)

export const updateReviewService = async({id,data}) => Review.findByIdAndUpdate(id,data,{
    new : true,
    runValidators : true
})

export const deleteReviewService = async({id}) => Review.findByIdAndDelete(id)