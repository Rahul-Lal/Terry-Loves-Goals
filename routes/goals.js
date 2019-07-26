const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  console.log('Terry`s redirecting')
  res.redirect('/terry-loves-goals')
})

router.get('/terry-loves-goals', (req, res) => {
  db.getGoals()
    .then(goals => {
      res.render('goals/index', {goals: goals})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
