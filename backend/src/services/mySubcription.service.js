const {mySubcription , Subcription} = require('../models')
const ApiError = require('../utils/ApiError')
const httpStatus = require('http-status')


const buySubcription = async (userId , subcriptionId) =>{
    
    const subcription = await Subcription.findById(subcriptionId)
    
    if (!subcription) {
        throw new ApiError(httpStatus.NOT_FOUND , "subcription not found")
    }

    const activeSub = await mySubcription.findOne({
        userId , 
        // isActive:false
    })

    if (activeSub) {
        throw new ApiError(httpStatus.BAD_REQUEST , "you already have an active subcription")
    }
    const days = subcription.days || 30
    const expiresDate = new Date()

    expiresDate.setDate(expiresDate.getDate() + days)

    const mySub = await mySubcription.create({
        userId,
        subcriptionId,
        expiresDate,
        name : subcription.name,
        duration : subcription.duration,
        price : subcription.price,
        matchesMessageLimit: 0,
    })

    return mySub
}


const getMySubctiptions = async(userId) =>{
    const subcriptions = await mySubcription.find({
        userId,
        isActive : false
    })
    .populate("subcriptionId")
    .populate("userId")

    return subcriptions
}

const getMySubctiption = async (id , userId) =>{
    console.log(userId)
    console.log("id" , id)
    const mysub = await mySubcription.findOne({
        _id : id,
        userId,
       
    })
    .populate("subcriptionId")
    .populate("userId")

    if (!mysub) {
        throw new ApiError(httpStatus.NOT_FOUND , "Subsctiption not found")
    }
    return mysub
}



module.exports = {
    getMySubctiptions,
    buySubcription,
    getMySubctiption
}