const express = require('express')
const controller = require('../controllers/task3Controller.js')
const task3Router = express.Router()

task3Router.use('/result', controller.answer_task3)
task3Router.use('/', controller.getPage_task3)

module.exports = task3Router