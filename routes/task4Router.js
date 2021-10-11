const express = require('express')
const controller = require('../controllers/task4Controller.js')
const task4Router = express.Router()

task4Router.use('/result', controller.answer_task4)
task4Router.use('/', controller.getPage_task4)

module.exports = task4Router