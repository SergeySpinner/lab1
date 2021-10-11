const express = require('express')
const controller = require('../controllers/task5Controller.js')
const task5Router = express.Router()

task5Router.use('/result', controller.answer_task5)
task5Router.use('/', controller.getPage_task5)

module.exports = task5Router