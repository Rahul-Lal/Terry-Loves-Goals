const express = require('express')
const routes = express.Router()
const data = require('./db')
const path = require('path')
const fs = require('fs')

module.exports = routes

/*
  router.('', (req, res) => {
    res.()
  })
*/

routes.get('/', (req, res) => {
  res.redirect('/terry-loves-goals')
})

routes.get('/terry-loves-goals', (req, res) => {
  
  res.render('goals/index', data)
})

routes.get('/terry-loves-goals/edit/:id', (req, res) => {
  const goalData = data.Goals.find(goal => {
    return goal.id == req.params.id
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

routes.post('/terry-loves-goals/edit/:id', (req, res) => {
  let reqBody = JSON.parse(JSON.stringify(req.body))
  let nameData = reqBody.name
  // console.log(reqBody)
  // console.log(nameData)
  // const goalData = data.Goals.find(goal => {
  //   return goal.id == req.params.id
  // })

  const filePath = path.join(__dirname)
  console.log(filePath)
  fs.writeFile(filePath, JSON.stringify(nameData), (err) => {
    if (err) {
      console.error(err)
    } else {
      res.redirect('/terry-loves-goals')
      console.log('There, it is done!')
    }
  })
})

// routes.post('/terry-loves-goals', (req, res) => {
//   res.render()
// })

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
