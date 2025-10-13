const {Subcription} = require('../models')
const httpStatus = require("http-status")
const ApiError = require('../utils/ApiError')
const { object } = require('joi')

const createSubcription = async(subcriptionBody) =>{
    return Subcription.create(subcriptionBody)
}


const getAllSubcription = async (filter , options) =>{
  const query = { status: "active" };
  for(const key of object.key(filter)){
    if(filter[key] !== ''){
        query[key] = {$regex : filter[key] , $option : "i"}
    }
  }
  const limit = parseInt(options.limit) || 10;
  const page = parseInt(options.page) || 1
  const skip = (page -1) * limit
  const sort = options.sortBy ? {[options.sortBy] : 1} : {createdAt : -1}

  const subcriptions = await  Subcription.find(query)
  .sort(sort)
  .skip(skip)
  .limit(limit)

  const total = await Subcription.countDocuments(query)

  return {
    total,
    page,
    limit,
    subcriptions
  }




}


module.exports ={
    createSubcription , getAllSubcription
}