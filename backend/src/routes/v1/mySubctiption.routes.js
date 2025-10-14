const express = require('express')
const { getMySubctiptions, buySubcription } = require('../../controllers/mySubcription.controller')
const auth  = require('../../middlewares/auth')

const mySubcriptionRoute= express.Router()

mySubcriptionRoute.get('/all',auth(),getMySubctiptions)
mySubcriptionRoute.post('/buy' , auth() , buySubcription)


module.exports = mySubcriptionRoute