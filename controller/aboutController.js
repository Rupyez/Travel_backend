import { HttpStatus } from "../constant/constant.js";
import successResponseData from "../helper/sucessResponseData.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import { aboutService } from "../service/index.js";

export const createAbout = catchAsyncError(async(req,res)=> {
    let body = req.body
    let data = await aboutService.createAboutService({data:body})
    // res.status(200).json({data})
    successResponseData({
        res:res,
        message: "About Page created sucessfully",
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const getSpecifiedAbout = catchAsyncError(async(req,res) =>{
    let id = req.params.id
    let data = await aboutService.getSpecifiedAboutService({id})
    if(!data){
        let error = new Error("About Page Not Found")
        error.statusCode = HttpStatus.NOT_FOUND
        throw error
    }
    successResponseData({
        res: res,
        message:"Specified About Page Found",
        statusCode : HttpStatus.OK,
        data
    })
})

export const getAllAbout = catchAsyncError(async(req,res,next) =>{
    let find = {}
    req.find = find
    req.service = await aboutService.getAllAboutService
    next()
})

export const updateAbout = catchAsyncError(async(req,res,next) => {
    let body = req.body
    let id = req.params.id
    let data = await aboutService.updateAboutService({data: body,id })
    successResponseData({
        res : res,
        message : `About with these ${id} updated successfully`,
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const deleteAbout = catchAsyncError(async(req,res,next) => {
    let id = req.params.id
    let data = await aboutService.deleteAboutService({id})
    successResponseData({
        res,
        message : `About with this ${id} deleted successfully`,
        statusCode : HttpStatus.OK,
    })
})

