const express = require('express')
const {
  createSubcription,
  getSubcriptions,
  getSubcription,
} = require('../../controllers/subcription.controller')

const subcriptionRoutes = express.Router()

subcriptionRoutes.post('/create', createSubcription)
subcriptionRoutes.get('/all', getSubcriptions)
subcriptionRoutes.get('/:id', getSubcription)

module.exports = subcriptionRoutes
