// gamers_games

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gamers_games').del()
    .then(function () {
      // Inserts seed entries
      return knex('gamers_games').insert([
        {
          game_id: 2,
          gamer_id: 3
        },
        {
          game_id: 1,
          gamer_id: 3
        },
        {
          game_id: 3,
          gamer_id: 3
        },
        {
          game_id: 1,
          gamer_id: 2
        },
        {
          game_id: 2,
          gamer_id: 2
        },
        {
          game_id: 1,
          gamer_id: 1
        }
      ]);
    });
};
