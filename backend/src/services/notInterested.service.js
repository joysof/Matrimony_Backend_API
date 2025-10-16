const httpStatus = require('http-status')
const ApiError = require('../utils/ApiError')
const {notInterested} = require('../models')
const { getUserById } = require('./user.service')



const createNotInterested= async(userId , profileId)=>{
    if(userId.toString() === profileId.toString()){
        throw new ApiError(httpStatus.BAD_REQUEST,"You cannot make yoursefl as a notInterested")
    }

    const profile = await getUserById(profileId)
    if(!profile){
        throw new ApiError(httpStatus.NOT_FOUND ,"user not found")
    }

    const alreadyNotInterested = await notInterested.findOne({userId,profileId})
    if (alreadyNotInterested) {
        throw new ApiError(httpStatus.BAD_REQUEST ,"Already select Not interested")
    }

    const notInrer = await notInterested.create({userId ,profileId})

    return notInrer
}

const getNotInteresteds = async(userId) =>{
    const notInrersted = await  notInterested.find({userId})
    if (!notInrersted) {
        throw new ApiError(httpStatus.BAD_REQUEST , "Your notInterest is  empty")
    }
    return notInrersted
    .populate("profileId")
    .sort({createAt: -1})
}




module.exports = {
    createNotInterested,
    getNotInteresteds,
    
}