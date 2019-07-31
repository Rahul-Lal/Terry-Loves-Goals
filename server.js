const express = require('express')
const hbs = require('express-handlebars')


const userRoutes = require('./routes/goals')

const server = express()

// Middleware
server.use(express.static(__dirname + '/public'))
server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// https://stackoverflow.com/questions/35199384/node-js-error-connect-econnrefused-response-from-server
server.get('/', function (req, res) {
    console.log('YEAH BOYYY!!!!!!!')
})

server.listen(59843, function () {
    console.log('Listening to port 59843')
})

// Routes

server.use('/', userRoutes)
server.use('/accomplished', userRoutes)
server.use('/unaccomplished', userRoutes)

module.exports = server
