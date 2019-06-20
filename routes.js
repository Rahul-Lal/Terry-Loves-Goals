const express = require('express')
const routes = express.Router()
const data = require('./db')
// const path = require('path')
// const fs = require('fs')

module.exports = routes

routes.get('/', (req, res) => {
  res.redirect('/terry-loves-goals')
})

routes.get('/terry-loves-goals', (req, res) => {
  res.render('goals/index', data)
})

// routes.get('/terry-loves-goals/:id', (req, res) => {
//   const goalData = data.goals.find(goal => {
//     return goal.id == req.params.id
//   })
//   res.render('goals/view', goalData)
// })

routes.get('/terry-loves-goals/accomplished', (req, res) => {
  res.render('goals/accomplished', data)
})

routes.get('/terry-loves-goals/failed', (req, res) => {
  res.render('goals/failed', data)
})
