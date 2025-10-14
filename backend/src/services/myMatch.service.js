const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')
const {myMatch , User} = require('../models')
const { getUserById } = require('./user.service')



const createMatch = async(userId , profileId) =>{
    if(userId.toString() === profileId.toString()){
        throw new ApiError(httpStatus.BAD_REQUEST  , "You cannot match with yourself")
    }
    const profile = await getUserById(profileId)
    if (!profile) {
        throw new ApiError(httpStatus.NOT_FOUND ,"Profile not found")
    }
    const existingMatch = await myMatch.findOne({userId , profileId})
    if (existingMatch) {
        throw new ApiError(httpStatus.BAD_REQUEST , "you already sent a match request")
    }

    const match = await myMatch.create({userId , profileId , status:"pending"})
    return match
}
















module.exports ={
    createMatch
}