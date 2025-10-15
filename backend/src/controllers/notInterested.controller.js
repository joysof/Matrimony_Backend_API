const httpstatus = require('http-status')
const catchAsync = require('../utils/catchAsync')
const response = require('../config/response')
const {notInterestedService} = require('../services')


const createNotInterested = catchAsync(async(req,res) =>{
    const userId = req.user.id
    const {profileId} = req.body

    const data = await notInterestedService.createNotInterested(userId,profileId)

    res.status(httpstatus.OK).json(
        response({
            message : "Profile select as a Not Interested",
            status:"OK",
            statusCode : httpstatus.CREATED,
            data
        })
    )
})


module.exports ={
    createNotInterested
}