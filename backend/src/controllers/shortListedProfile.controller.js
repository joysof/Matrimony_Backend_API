const httpStatus =require('http-status')
const catchAsync = require('../utils/catchAsync')
const response = require('../config/response')
const {shortListedProfileService} = require('../services')


const addShortListProfile=catchAsync(async(req ,res) =>{
    const userId = req.user.id 
    const profileId = req.body.profileId
    const data = await shortListedProfileService.addShortListProfile(userId,profileId)

    res.status(httpStatus.CREATED).json(
        response({
            message:"profile added to shortList",
            status:"Ok",
            statusCode:httpStatus.CREATED,
            data
        })
    )
})



module.exports ={
    addShortListProfile
}