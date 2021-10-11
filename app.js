const express = require('express')
const app = express()

const mainPageRouter = require('./routes/mainPageRouter.js')
const task1Router = require("./routes/task1Router.js")
const task2Router = require('./routes/task2Router.js')
const task3Router = require('./routes/task3Router.js')
const task4Router = require('./routes/task4Router.js')
const task5Router = require('./routes/task5Router.js')

app.set('view engine', 'hbs')
app.use(express.urlencoded({extended: false}))

app.use('/task1', task1Router)
app.use('/task2', task2Router)
app.use('/task3', task3Router)
app.use('/task4', task4Router)
app.use('/task5', task5Router)
app.use('/', mainPageRouter)

app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});

app.listen( process.env.PORT || 3000)