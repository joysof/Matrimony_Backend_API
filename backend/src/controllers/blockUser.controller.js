const httpStatus = require('http-status')
const catchAsync = require('../utils/catchAsync')
const response = require('../config/response')
const {blcokUserService} = require('../services')


const blockUser = catchAsync(async(req,res) =>{
    const userId = req.user.id
    const {profileId} = req.body

    const data = await blcokUserService.addBlock(userId ,profileId)

    res.status(httpStatus.CREATED).json(
        response({
            message:"User blocked successfully",
            status: 'Ok',
            statusCode : httpStatus.CREATED,
            data
        })
    )
})




module.exports ={
    blockUser
}