const express = require('express')
const { getMySubctiptions, buySubcription, getMySubctiption } = require('../../controllers/mySubcription.controller')
const auth  = require('../../middlewares/auth')

const mySubcriptionRoute= express.Router()

mySubcriptionRoute.get('/all',auth(),getMySubctiptions)
mySubcriptionRoute.post('/buy' , auth() , buySubcription)
mySubcriptionRoute.get('/:id' , auth() , getMySubctiption)


module.exports = mySubcriptionRoute