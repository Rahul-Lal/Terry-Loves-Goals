const express = require('express')
const hbs = require('express-handlebars')


const userRoutes = require('./routes/goals')

const server = express()

// Middleware
server.use(express.static(__dirname + '/public'))
server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', userRoutes)
server.use('/terry-loves-goals', userRoutes)
server.use('/terry-loves-goals/accomplished', userRoutes)
server.use('/terry-loves-goals/unaccomplished', userRoutes)

module.exports = server
