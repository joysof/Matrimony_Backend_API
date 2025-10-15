const express = require('express')
const auth = require('../../middlewares/auth')
const {blockUserController} = require('../../controllers')

const blockUserRoute = express.Router()


blockUserRoute.post('/' , auth(),blockUserController.blockUser)


module.exports = blockUserRoute