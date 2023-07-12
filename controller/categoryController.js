import { HttpStatus } from "../constant/constant.js";
import successResponseData from "../helper/sucessResponseData.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import { categoryService } from "../service/index.js";
import { TripInfo } from "../schemaModel/model.js";


export const createCategory = catchAsyncError(async(req,res) => {
    let body = req.body
    let data = await categoryService.createCategoryService({data:body})

    // category 
    const tripInformation = await TripInfo.findById(req.body.TripInfo)
    if(!tripInformation){
        return res.status(400).json({sucess : false,
        tripInformation})
    }
    successResponseData({
        res : res,
        message : "Category is created sucesfully",
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const getSpecifiedCategory = catchAsyncError(async(req,res) => {
    let id = req.params.id
    let data = await categoryService.getSpecifiedCategoryService({id})
    if(!data){
        let error = new Error("Category Page Not FOund")
        error.statusCode = HttpStatus.NOT_FOUND
        throw error
    }
    successResponseData({
        res : res,
        message : "Specified Category Page Found",
        statusCode : HttpStatus.OK,
        data
    })
})

export const getAllCategory = catchAsyncError(async(req,res,next) => {
    let find = {}
    req.find = find
    req.service = await categoryService.getAllCategoryService
    next()
})

export const updateCategory = catchAsyncError(async(req,res,next) =>{
    let body = req.body
    let id = req.params.id
    let data = await categoryService.updateCategoryService({data: body,id })
    successResponseData({
        res : res,
        message : `Category with these ${id} updated sucessfully`,
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const deleteCategory = catchAsyncError(async(req,res,next) =>{
    let id = req.params.id
    let data = await categoryService.deleteCategoryService({id})
    successResponseData({
        res : res,
        message : `Category with these ${id} deleted sucessfully`,
        statusCode : HttpStatus.OK,
        data
    })
})