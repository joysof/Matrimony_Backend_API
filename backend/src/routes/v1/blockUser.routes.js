const express = require('express')
const auth = require('../../middlewares/auth')
const {blockUserController} = require('../../controllers')

const blockUserRoute = express.Router()


blockUserRoute.post('/addBlock' , auth(),blockUserController.blockUser)
blockUserRoute.post('/unBlock', auth() , blockUserController.unBlockUser)


module.exports = blockUserRoute