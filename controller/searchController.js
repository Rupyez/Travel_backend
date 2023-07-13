import { HttpStatus } from "../constant/constant.js";
import successResponseData from "../helper/sucessResponseData.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import { searchService } from "../service/index.js";

export const createSearch = catchAsyncError(async(req,res) => {
    let body = req.body
    let data = await searchService.createSearchService({ data: body})
    successResponseData({
        res : res,
        message : "Search Page created sucessfully",
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const getSpecifiedSearch = catchAsyncError(async(req,res) => {
    let id = req.params.id
    let data = await searchService.getSpecifiedSearchService({id})
    if(!data){
        let error = new Error("Search Page Not Found")
        error.statusCode = HttpStatus.NOT_FOUND
        throw error
    }
    successResponseData({
        res : res,
        message : "Specified Search Page Found",
        statusCode : HttpStatus.OK,
        data
    })
})

export const getAllSearch = catchAsyncError(async(req,res,next) => {
    let find = {}
    req.find = find
    req.service = await searchService.getAllSearchService
    next()
})

export const updateSearch = catchAsyncError(async(req,res,next) => {
    let body = req.body
    let id = req.params.id
    let data = await searchService.updateSearchService({data : body,id })
    successResponseData({
        res : res,
        message : `Search with these ${id} updated sucessfully`,
        statusCode : HttpStatus.CREATED,
        data
    })
})

export const deleteSearch = catchAsyncError(async(req,res,next) => {
    let id = req.params.id
    let data = await searchService.deleteSearchService({id})
    successResponseData({
        res : res,
        message : `Search with this ${id} deleted sucessfully`,
        statusCode : HttpStatus.OK,
        data
    })
})