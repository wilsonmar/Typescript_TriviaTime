'use strict'

const path = require('path')
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')

const app = express()
const server = http.Server(app)

const port = process.env.PORT || 3338

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', express.static(path.join(__dirname, 'html')))

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`)
})