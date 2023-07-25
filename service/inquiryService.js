import { Inquiry } from "../schemaModel/model.js";

export const createInquiryService = async({data}) => Inquiry.create(data)

export const getSpecifiedInquiryService = async({id}) => Inquiry.findById(id)

export const getAllInquiryService = async({
    find = {},
    sort = "",
    limit = "",
    skip = "",
    select = ""
}) => Inquiry.find(find).sort(sort).limit(limit).skip(skip).select(select)

export const updateInquiryService = async({id,data}) => Inquiry.findByIdAndUpdate(id,data,{
    new : true,
    runValidators : true
})

export const deleteInquiryService = async({id}) => Inquiry.findByIdAndDelete(id)