
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('goals').del()
    .then(function () {
      // Inserts seed entries
      return knex('goals').insert([
        {id: 1, name: 'Solve 100 Cases'},
        {id: 2, name: 'Bring back my favourite mango yogurt'},
        {id: 3, name: 'Lay off Cacao Nibs for 30 days'},
        {id: 4, name: 'Try Austrian yogurt'},
        {id: 5, name: 'Eat 10,000 calories to mantain muscle mass'},
        {id: 6, name: '`Destroy` the silver-painted breakdancer in battle'},
        {id: 7, name: 'Build the fairy princess castle for Cagney and Lacey'},
        {id: 8, name: 'Die saving the president'}
      ]);
    });
};
