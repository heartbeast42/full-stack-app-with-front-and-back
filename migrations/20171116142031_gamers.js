// gamers

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('gamers', (table) => {
      table.increments('id').primary();
      table.string('name');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('gamers')
  ]);
};
