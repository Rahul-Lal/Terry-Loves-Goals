const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getGoal: getGoal,
  getGoals: getGoals,
  addGoals: addGoals,
  updateGoal: updateGoal,
  deleteGoals: deleteGoals
}

function getGoals (db = connection) {
  return db('goals')
  .select()
}

function getGoal (id, db = connection) {
  return db('goals').where('id', id).first()
}

function updateGoal (id, goal, db = connection) {
  return db('goals')
  .update(goal)
  .where('id', id).first()
}

function addGoals (goal, db = connection) {
  return db('goals')
  .insert({ name: goal.name})
}

function deleteGoals(id, db = connection) {
  return db('goals')
  .where('id', id)
  .del()
}