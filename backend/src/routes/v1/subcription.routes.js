const express = require('express')
const { createSubcription } = require('../../controllers/subcription.controller')

const subcriptionRoutes = express.Router()

subcriptionRoutes.post('/create' , createSubcription)




module.exports = subcriptionRoutes