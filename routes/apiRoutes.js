const express = require('express')
const api_route = express()

const apiController = require('../controllers/apiController')

api_route.get('/', (req, res) => {
    res.send('hello')
})
api_route.get('/getChartData/:timeRange', apiController.loadChartData)

module.exports = api_route
