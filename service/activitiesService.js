import { Activities } from "../schemaModel/model.js";

export const createActivitiesService = async({data}) => Activities.create(data);

export const getSpecifiedActivitiesService = async({id}) => Activities.findById(id).populate("Category");

export const getAllActivitiesService = async({
    find = {},
    sort = "",
    limit = "",
    skip = "",
    select = ""
}) => Activities.find(find).sort(sort).limit(limit).skip(skip).select(select).populate("Category")

export const updateActivitiesService = async({data,id}) => Activities.findByIdAndUpdate(id,data,{
    new : true,
    runValidators : true
})

export const deleteActivitiesService = async({id}) => Activities.findByIdAndDelete(id)