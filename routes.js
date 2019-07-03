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
  console.log('Terry`s redirecting')
  res.redirect('/terry-loves-goals')
})

routes.get('/terry-loves-goals', (req, res) => {
  console.log('TERRY`S HOME!!!!')  
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
      console.log('Terry`s gonna edit a goal!')
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
  fs.writeFile(filePath, nameData, (err) => {
    if (err) {
      console.error(err)
    } else {
      res.render('/terry-loves-goals')
      console.log('Terry edited a goal!')
    }
  })
})

// routes.post('/terry-loves-goals', (req, res) => {
//   res.render()
// })

routes.get('/terry-loves-goals/accomplished', (req, res) => {
  console.log('Terry is really DISAPPOINTED in you!')
  res.render('goals/accomplished', data)
})

routes.get('/terry-loves-goals/failed', (req, res) => {
  console.log('Terry is really PROUD of you!')
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
