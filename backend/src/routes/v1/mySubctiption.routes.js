const express = require('express')
const { getMySubctiptions } = require('../../controllers/mySubcription.controller')
const auth  = require('../../middlewares/auth')

const mySubcriptionRoute= express.Router()

mySubcriptionRoute.get('/all',auth(),getMySubctiptions)


module.exports = mySubcriptionRoute