const {mySubcription} = require('../models')
const ApiError = require('../utils/ApiError')
const httpStatus = require('http-status')



const getMySubctiptions = async(userId) =>{
    const subcriptions = await mySubcription.find({
        userId,
    })
    .populate("subcriptionId")
    .populate("userId")

    return subcriptions
}



module.exports = {
    getMySubctiptions
}