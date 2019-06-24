const express = require('express')
const routes = express.Router()
const data = require('./db')
const path = require('path')
const fs = require('fs')

module.exports = routes

routes.get('/', (req, res) => {
  res.redirect('/terry-loves-goals')
})

routes.get('/terry-loves-goals', (req, res) => {
  res.render('goals/index', data)
})

routes.get('/terry-loves-goals/edit/:id', (req, res) => {
  const goalData = data.Goals.find(goal => {
    return goal.id === req.params.id
  })

  const filePath = path.join(__dirname, JSON.stringify(data))
  fs.watchFile(filePath, data, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('There, it is done!')
    }
  })

  res.render('goals/edit', goalData)
})

routes.get('/terry-loves-goals/accomplished', (req, res) => {
  res.render('goals/accomplished', data)
})

routes.get('/terry-loves-goals/failed', (req, res) => {
  res.render('goals/failed', data)
})

// routes.get('/terry-loves-goals/failed', (req, res) => {
//   const writePath = path.join(__dirname, data.json)
//   const filePath = path.join(__dirname, data)
//   fs.writePath(filePath, JSON.parse(data), (err) => {
//     if (err) {
//       console.error(err)
//     } else {
//       console.log('There, it is done!')
//     }
//   })
// })
