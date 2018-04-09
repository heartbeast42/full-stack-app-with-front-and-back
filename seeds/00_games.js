// games

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {
          // id: 1,
          title: 'skyrim',
          platform: 'PC'
        },
        {
          // id: 2,
          title: 'doom',
          platform: 'xBox'
        },
        {
          // id: 3,
          title: 'metal gear',
          platform: 'playstation'
        }
      ]);
    });
};
