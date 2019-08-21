const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getGoals()
    .then(goals => {
      res.render('goals/index', { goals: goals })
      console.log(goals)
      console.log('Terry`s is Home')
    })
    .catch(err => {
      console.log('DATABASE ERROR: ' + err.message)
    })
})

router.listen(48427, function () {
  console.log('Example app listening on port 48427!');
 });

router.get('/accomplished', (req, res) => {
  //const id = req.params.id

  // db.deleteGoals(id)
  // .then(() => {
  res.render('goals/accomplished', db)
  console.log('Terry is really PROUD in you!')
  // })
})

router.get('/unaccomplished', (req, res) => {
  // const id = req.params.id

  // db.deleteGoals(id)
  // .then(() => {
  res.render('goals/failed', db)
  console.log('Terry is really DISAPPOINTED of you!')
  // })
})

router.post('/', (req, res) => {
  let goal = req.body
  console.log(goal)

  db.addGoals(goal)
    .then(goalId => {
      console.log(`${goalId}`)
      res.render('/terry-loves-goals', { goalId })
      console.log(`Terry's been added`)
    })
    .catch(err => {
      console.log('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
