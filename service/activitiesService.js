import { Activities } from "../schemaModel/model.js";

export const createActivitiesService = async({data}) => Activities.create(data);

export const getSpecifiedActivitiesService = async({id}) => Activities.findById(id);

export const getAllActivitiesService = async({
    find = {},
    sort = "",
    limit = "",
    skip = "",
    select = ""
}) => Activities.find(find).sort(sort).limit(limit).skip(skip).select(select)