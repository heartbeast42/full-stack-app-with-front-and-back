// gamers

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gamers').del()
    .then(function () {
      // Inserts seed entries
      return knex('gamers').insert([
        {
          // id: 1,
          name: 'TnT'
        },
        {
          // id: 2,
          name: 'McCrush'
        },
        {
          // id: 3,
          name: 'BrusinKreusser'
        }
      ]);
    });
};
