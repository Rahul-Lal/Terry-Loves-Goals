const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getGoals()
    .then(goals => {
      res.render('goals/index', { goals: goals })
      console.log(goals.name)
      console.log('Terry`s is Home')
    })
    .catch(err => {
      console.log('DATABASE ERROR: ' + err.message)
    })
})

// express.listen(48427, function () {
//   console.log('Example app listening on port 48427!');
//  });


router.get('/:id', (req, res) => {
  const id = req.params.id

  db.getGoal(id)
    .then(goals => {
      res.render('goals/goal', goals)
      console.log('Terry is really PROUD in you!')
    })
})



router.get('/edit/:id', (req, res) => {
  res.render('goals/edit')
  console.log('Terry is really concerned in you!')
})

router.put('/edit/:id', (req, res) => {
  const id = req.params.id

  db.updateGoal(id)
    .then(goals => {
      res.render('goals/goal', goals)
      console.log('Terry is observing you!')
    })
})


router.get('/accomplished', (req, res) => {
  res.render('goals/accomplished', db)
  console.log('Terry is really PROUD in you!')
})

router.delete('/accomplished', (req, res) => {
  const id = req.params.id

  db.deleteGoals(id)
    .then(() => {
      res.render('goals/accomplished', db)
      console.log('Terry is really PROUD in you!')
    })
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
      res.render('/', { goalId })
      console.log(`Terry's been added`)
    })
    .catch(err => {
      console.log('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
