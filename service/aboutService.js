import { About } from "../schemaModel/model.js";

export const createAboutService = async({data})=> About.create(data)

// export const getAllAboutService = async({data})

export const getSpecifiedAboutService = async({id}) => About.findById(id)

export const getAllAboutService = async({
    find = {},
    sort = "",
    limit = "",
    skip = "",
    select = ""
}) => About.find(find).sort(sort).limit(limit).skip(skip).select(select)