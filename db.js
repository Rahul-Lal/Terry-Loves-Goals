const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getGoal: getGoal,
  getGoals: getGoals
}

function getGoals (db = connection) {
  return db('goals').select()
}

function getGoal (id, db = connection) {
  return db('goals').where('id', id).first()
}
