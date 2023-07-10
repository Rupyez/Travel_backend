import { Category } from "../schemaModel/model.js";

export const createCategoryService = async({data}) => Category.create(data)

export const getSpecifiedCategoryService = async({id}) => Category.findById(id)

export const getAllCategoryService = async({
    find = {},
    sort = "",
    limit = "",
    skip = "",
    select = ""
}) => Category.find(find).sort(sort).limit(limit).skip(skip).select(select)

export const updateCategoryService = async({data,id}) => Category.findByIdAndUpdate(id,data,{
    new : true,
    runValidators : true
})

export const deleteCategoryService = async({id}) => Category.findByIdAndDelete(id)