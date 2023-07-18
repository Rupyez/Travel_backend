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