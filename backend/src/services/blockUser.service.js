const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')
const {blockUser, User} = require('../models')
const {userService} = require('../services')


const addBlock = async(userId , profileId) =>{
    if(userId.toString() === profileId.toString()){
        throw new ApiError(httpStatus.BAD_REQUEST , "You cannot block yourself")
    }

    const profile = await userService.getUserById(profileId)
    if (!profile) {
        throw new ApiError(httpStatus.NOT_FOUND , "User not found")
    }
    const alreadyBlocked = await blockUser.findOne({userId , profileId})

    if (alreadyBlocked) {
        throw new ApiError(httpStatus.BAD_REQUEST , "User already blocked")
    }

    const block = await blockUser.create({userId , profileId})
    return block
}



module.exports={
    addBlock
}