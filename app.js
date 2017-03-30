const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

/* Get routes */
const twit = require('./routes/twit')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/twit', twit)

/* Listen to provided port */
app.listen(3000 || process.env.PORT)