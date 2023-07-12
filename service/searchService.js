import { Search } from "../schemaModel/model.js";

export const createSearchService = async({data}) => Search.create(data)

export const getSpecifiedSearchService = async({id}) => Search.findById(id)

export const getAllSearchService = async({
    find = {},
    sort = "",
    limit = "",
    skip = "",
    select = ""
}) => Search.find(find).sort(sort).limit(limit).skip(skip).select(select)

export const updateSearchService = async({id,data}) => Search.findByIdAndUpdate(id,data,{
    new : true,
    runValidators : true
})

export const deleteSearchService = async({id}) => Search.findByIdAndDelete(id)