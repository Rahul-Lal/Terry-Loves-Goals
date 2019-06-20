const express = require('express')
const hbs = require('express-handlebars')
const server = express()
const routes = require('./routes')
module.exports = server

server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// routes
server.use('/', routes)
server.use('/terry-loves-goals', routes)
server.use('/terry-loves-goals/:id', routes)
server.use('/terry-loves-goals/accomplished', routes)
server.use('/terry-loves-goals/failed', routes)
