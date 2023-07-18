import { SocialMedia } from "../schemaModel/model.js";

export const createSocialMediaService = async({data}) => SocialMedia.create(data)

export const getSpecifiedSocialMediaService = async({id}) => SocialMedia.findById(id).populate("User")

export const getAllSoicalMediaService = async({
    find = {},
    sort = "",
    limit = "",
    skip = "",
    select = ""
}) => SocialMedia.find(find).sort(sort).limit(limit).skip(skip).select(select).populate("User")

export const updateSocialMediaService = async({data,id}) => SocialMedia.findByIdAndUpdate(id,data,{
    new : true,
    runValidators : true
})

export const deleteSocialMediaService = async({id}) => SocialMedia.findByIdAndDelete(id)