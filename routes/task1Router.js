const express = require('express')
const controller = require('../controllers/task1Controller.js')
const task1Router = express.Router()

// console.log('task1Router has initialized')

task1Router.use('/answer', controller.answer_task1)
task1Router.use('/', controller.getPage_task1)

module.exports = task1Router