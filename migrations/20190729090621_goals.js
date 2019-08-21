exports.up = function(knex, Promise) {
    return knex.schema.table('goals', (table) => {
        table.string('isCompleted')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('goals', (table) => {
        table.dropColumn('isCompleted')
    })  
};
