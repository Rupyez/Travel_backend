import { hashPassword } from "../Utils/hashFunction.js";
import catchAsyncErrors from "../middleware/catchAsyncError.js";
import { userService } from "../service/index.js";
import successResponseData from "../helper/sucessResponseData.js";
import { HttpStatus } from "../constant/constant.js";

// create a user 
export const createUser = catchAsyncErrors(async(req,res,next) => {
    let body = {...req.body} 

    // password hashing
    let passHashedPassword = await hashPassword(body.password)
    body.password = passHashedPassword
    let data = await userService.createUserService({body})
    successResponseData({
        res : res,
        message : "User is created successfully",
        statusCode : HttpStatus.CREATED,
        data
    })
})