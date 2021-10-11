const express = require('express')
const controller = require('../controllers/mainPageController')
const mainPageRouter = express.Router()

mainPageRouter.use('/', controller.getPage)

module.exports = mainPageRouter