const express = require('express')
const auth = require('../../middlewares/auth')
const myMatchController = require('../../controllers/myMatch.controller')
const myMatchRoute = express.Router()

myMatchRoute.post('/' , auth() ,myMatchController.createMatch )



module.exports = myMatchRoute