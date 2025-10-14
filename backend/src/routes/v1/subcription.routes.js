const express = require('express')
const {
  createSubcription,
  getSubcriptions,
  getSubcription,
  updateSubcription,
  deleteSubcription,
} = require('../../controllers/subcription.controller')

const subcriptionRoutes = express.Router()

subcriptionRoutes.post('/create', createSubcription)
subcriptionRoutes.get('/all', getSubcriptions)
subcriptionRoutes.get('/:id', getSubcription)
subcriptionRoutes.put('/:id' , updateSubcription)
subcriptionRoutes.delete('/:id' , deleteSubcription)
module.exports = subcriptionRoutes
