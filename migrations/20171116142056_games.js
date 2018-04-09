// games

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('games', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.string('platform');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('games')
  ]);
};
