const httpStatus = require('http-status')
const catchAsync = require('../utils/catchAsync')
const response = require('../config/response')
const {User} = require('../models')
const {mySubcriptionService, userService} = require('../services')

const getMySubctiptions = catchAsync(async(req,res) =>{
    const user = await req.user
    if (!user) {
        return res.status(httpStatus.UNAUTHORIZED).json({
            status : "Fail",
            message: "user not authenticated",
            statusCode:httpStatus.UNAUTHORIZED
        })
    }
    const data = await mySubcriptionService.getMySubctiptions(user._id)

    res.status(httpStatus.OK).json(
    response({
      message: "Your subscriptions",
      status: "OK",
      statusCode: httpStatus.OK,
      data,
    })
  );
})


module.exports ={
    getMySubctiptions
}