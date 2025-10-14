const httpStatus = require("http-status")
const catchAsync  = require("../utils/catchAsync")
const response = require("../config/response")
const {myMatchService} = require('../services')

const createMatch = catchAsync(async(req , res) =>{
    const userId = req.user.id
    const {profileId} = req.body
    

    const match = await myMatchService.createMatch(userId , profileId)

    res.status(httpStatus.CREATED).json(
        response({
            message : "Match request sent successfully",
            status: "Ok",
            statusCode : httpStatus.CREATED,
            data : match
        })
    )
})








module.exports = {
    createMatch
}