// games

const express = require('express');
const router = express.Router();
const db = require('../database/queries');

router.get('/', (req, res, next) => {
  db.gamesData()
  .then((games) => {
    res.render('games', {
      games: games
    });
  });
});

// go to game page
router.get('/:id', (req, res, next) => {
  db.gameId(req.params.id)
  .then((game) => {
    res.render('game', {
      game: game[0]
    });
  });
});

// add game
router.post('/', (req, res, next) => {
  console.log('post to / was made', req.body);
  db.newGame(req.body) // that there req.body is an object
  .then((data) => {
    res.redirect('/games');
  });
});

// delete game
router.delete('/:id', (req, res, next) => {
  console.log('delete request', req.params);
  db.deleteGame(req.params)
  .then((data) => {
    res.redirect('/games');
  });
});

// put
router.put('/:id', (req, res, next) => {
  // console.log('put request made', req.params, req.body);
  db.updateGame(req.body, req.params)
  .then((data) => {
    res.redirect(`/games/${req.params.id}`);
  });
});

module.exports = router;
