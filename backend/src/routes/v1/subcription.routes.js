const express = require('express')
const { createSubcription, getSubcriptions } = require('../../controllers/subcription.controller')

const subcriptionRoutes = express.Router()

subcriptionRoutes.post('/create' , createSubcription)
subcriptionRoutes.get('/all' , getSubcriptions)



module.exports = subcriptionRoutes