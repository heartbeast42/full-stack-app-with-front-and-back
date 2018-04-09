// gamers_games

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('gamers_games', (table) => {
      table.increments('id').primary();
      table.integer('game_id').references('games.id').onDelete('CASCADE');
      table.integer('gamer_id').references('gamers.id').onDelete('CASCADE');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('gamers_games')
  ]);
};
