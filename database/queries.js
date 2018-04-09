//                     SET \/ \/ EQUAL TO \/ \/ \/ \/
// join('_table-name_', '_table-id_', '_otherTable.data_')

const knex = require('./connection');

// join
function gamersGamesData(id) {
  return knex('gamers_games')
  .where('gamers_games.gamer_id', id)
  .innerJoin('games', 'games.id', 'gamers_games.game_id')
  .innerJoin('gamers', 'gamers.id', 'gamers_games.gamer_id')
  .select();
}

function addJoinEntry(data) {
  return knex('gamers_games')
  .insert(data);
}

function deleteGamerGame(game, gamer) {
  return knex('gamers_games')
  .del()
  .where('game_id', game)
  .andWhere('gamer_id', gamer);
}

// games
// get all entries in the games table
function gamesData() {
  return knex('games');
}

// gets one game by its id
function gameId(id) {
  return knex('games')
  .select()
  .where('id', id);
}

// creates a new game
function newGame(gameInfo) {
  return knex('games')
  .insert(gameInfo); // is this an object?
}

// update: changes the name of "game" to "newGame" where "game" is the id
function updateGame(newName, game) {
  return knex('games')
  .update(newName) //
  .where(game);
}

// delete a game
function deleteGame(game) {
  return knex('games')
  .del()
  .where(game);
}

// gamers
function gamersData() {
  return knex('gamers');
}

function gamerId(id) {
  return knex('gamers')
  .select()
  .where('id', id);
}

function newGamer(gamerInfo) {
  return knex('gamers')
  .insert(gamerInfo);
}

function deleteGamer(gamer) {
  return knex('gamers')
  .del()
  .where(gamer);
}

function updateGamer(gamer, newName) {
  return knex('gamers')
  .update(newName)
  .where(gamer);
}

module.exports = {
  addJoinEntry,
  deleteGamerGame,

  gamersGamesData,
  gamesData,
  gameId,
  newGame,
  updateGame,
  deleteGame,

  gamersData,
  gamerId,
  newGamer,
  deleteGamer,
  updateGamer
};
