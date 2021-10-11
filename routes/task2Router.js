const express = require('express')
const controller = require('../controllers/task2Controller.js')
const task2Router = express.Router()

// console.log('task2Router has initialized')

task2Router.use('/result', controller.answer_task2)
task2Router.use('/', controller.getPage_task2)

module.exports = task2Router