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



module.exports = {
    createSubcription
}