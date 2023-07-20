import { comparePassword, hashPassword } from "../Utils/hashFunction.js";
import catchAsyncErrors from "../middleware/catchAsyncError.js";
import { userService } from "../service/index.js";
import successResponseData from "../helper/sucessResponseData.js";
import { HttpStatus } from "../constant/constant.js";
import { generateToken } from "../Utils/token.js";
import { expiryIn, secretKey } from "../config/config.js";

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

export let loginUser = catchAsyncErrors(async(req,res) => {
    let email = req.body.email
    let password = req.body.password
    let user = await userService.getSpecificUserByAny({ email })
    if(user === null){
        let error = new Error("Please enter valid email or password")
        error.statusCode = HttpStatus.UNAUTHORIZED
        throw error 
    } else {
        let isValidPassword = await comparePassword(password,user.password)
        if(isValidPassword){
            let infoObj = { userId : user._id, role : user.role}
            let token = await generateToken(infoObj,secretKey, expiryIn)
            let data = { token : token }
            await userService.createTokenService({data})
            delete user?._doc?.password
            successResponseData({
                res : res,
                message : "Login Successfully",
                statusCode : HttpStatus.OK,
                data : {
                    token : token,
                    user : user
                }
            })
        } else {
            let error = new Error("Please Enter Valid Email or Password")
            error.statusCode = HttpStatus.UNAUTHORIZED
            throw error
        }
    }
})

export const logoutUser = catchAsyncErrors(async(req,res) => {
    let id = req.token
    await userService.deleteSpecificTokenService({id})
    successResponseData({
        res : res,
        message : "Logout Sucessfully",
        statusCode : HttpStatus.OK,
    })
})

export const getAllUser = catchAsyncErrors(async(req,res,next) => {
    let find = {};
    if (req.query.email) {
        find.email = { $regex: req.query.email, $options: "i" };
    }
    if (req.query.firstName) {
        find.firstName = req.query.firstName;
    }
    req.find = find;
    req.service = userService.getAllUserService;
    req.myOwnSelect = "-password";
    next();
})