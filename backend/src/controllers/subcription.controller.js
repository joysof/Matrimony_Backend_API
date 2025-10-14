const httpStatus = require("http-status")
const catchAsync = require('../utils/catchAsync')
const response = require("../config/response")
const {subcriptionService} = require('../services')


const createSubcription = catchAsync(async(req,res) =>{
    const subcription = await subcriptionService.createSubcription(req.body)

    res.status(httpStatus.CREATED).json(
        response({
            message : "subcription create",
            status: "Ok",
            statusCode: httpStatus.CREATED,
            data: subcription
        })
    )
})

const getSubcriptions = catchAsync(async(req,res) =>{
    const filter = req.query || {}
    const options = {
        limit : req.query.limit,
        page : req.query.page,
        sortBy : req.query.sortBy
    }
    const result = await subcriptionService.getSubcriptions(filter , options)

    res.status(httpStatus.OK).json(
        response({
            message : "All Subcription",
            status: "Ok",
            statusCode : httpStatus.OK,
            data :result
        })
    )
})

const getSubcription = catchAsync(async (req,res) =>{
    const subcription = await subcriptionService.getSubcriptionById(req.params.id,req.body)
    res.status(httpStatus.OK).json(
        response({
            message: "subcription",
            status: "Ok",
            statusCode:httpStatus.OK,
            data:subcription
        })
    )
})

module.exports = {
    createSubcription,
    getSubcriptions,
    getSubcription
}