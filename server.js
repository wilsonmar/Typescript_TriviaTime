const express = require("express")
const app = express()
const bodyParser = require("body-parser")
require("dotenv").config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "*")
    res.header('Access-Control-Allow-Credentials', true)
    res.header("Access-Control-Allow-Origin", req.headers.origin)
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,UPDATE,OPTIONS")
    next()
})

const { PORT } = process.env
const server = app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})