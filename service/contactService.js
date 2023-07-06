import { Contact } from "../schemaModel/model.js";

export const createContactService = async({data})=> Contact.create(data)

export const getSpecifiedContactService = async({id}) => Contact.findById(id)

export const getAllContactService = async({
    find = {},
    sort = "",
    limit = "",
    skip = "",
    select = ""
}) => Contact.find(find).sort(sort).limit(limit).skip(skip).select(select)

export const updateContactService = async({id,data}) => Contact.findByIdAndUpdate(id,data,{
    new : true,
    runValidators : true
})

export const deleteContactService = async({id}) => Contact.findByIdAndDelete(id)