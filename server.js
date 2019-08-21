const express = require('express')
const hbs = require('express-handlebars')
const port = process.env.PORT
const db = require('./db')
const https = require('https')


const routes = require('./routes/goals')

const server = express()

// Middleware
server.use(express.static(__dirname + '/public'))
server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// // https://stackoverflow.com/questions/35199384/node-js-error-connect-econnrefused-response-from-server
// server.get('/', function (req, res) {
//     res.render('goals/index', db)
// })



// // Routes
// const webServer = https.createServer(function(req, res) {
//     res.end('testing')
// })

// webServer.on('listening', function() {
//     console.log('Run server run')
// })

// webServer.listen(3000)

server.use('/', routes)

module.exports = server
