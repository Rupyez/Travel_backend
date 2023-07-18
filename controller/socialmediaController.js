import { HttpStatus } from "../constant/constant.js";
import successResponseData from "../helper/sucessResponseData.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import { socialmediaService } from "../service/index.js";
import { User } from "../schemaModel/model.js";

export const createSocialMedia = catchAsyncError(async(req,res) => {
    let body = req.body
    let data = await socialmediaService.createSocialMediaService({ data:body })

    // socialmedia populate User
    const userinfo = await User.findById(req.body.User)
    if(!userinfo){
        return res.status(400).json({ success : false,
        userinfo})
    }

    successResponseData({
        res : res,
        message : "SocialMedia Page is created successfully",
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const getSpecifiedSocialMedia = catchAsyncError(async(req,res) => {
    let id = req.params.id
    let data = await socialmediaService.getSpecifiedSocialMediaService({id})
    if(!data) {
        let error = new Error("SocialMedia Page Not Found")
        error.statusCode = HttpStatus.NOT_FOUND
        throw error
    }
    successResponseData({
        res : res ,
        message : "Specified SocialMedia Page is found",
        statusCode : HttpStatus.OK,
        data
    })
})

export const getAllSocialMedia = catchAsyncError(async(req,res,next) => {
    let find = {}
    req.find = find
    req.service = await socialmediaService.getAllSoicalMediaService
    next()
})

export const updateSocialMedia = catchAsyncError(async(req,res,next) => {
    let body = req.body
    let id = req.params.id
    let data = await socialmediaService.updateSocialMediaService({ data : body,id })
    successResponseData({
        res : res,
        message : `SociaMedia with these ${id} updated successfully`,
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const deleteSocialMedia = catchAsyncError(async(req,res,next) => {
    let id = req.params.id
    let data = await socialmediaService.deleteSocialMediaService({id})
    successResponseData({
        res : res,
        message : `SocialMedia Page with these ${id} deleted successfully`,
        statusCode : HttpStatus.OK,
        data
    })
})