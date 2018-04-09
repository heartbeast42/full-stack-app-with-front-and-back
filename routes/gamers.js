// gamers

const express = require('express');
const router = express.Router();
const db = require('../database/queries');

router.get('/', (req, res, next) => {
  db.gamersData()
  .then((gamers) => {
    res.render('gamers', {
      gamers: gamers
    });
  });
});

// go to gamer page
router.get('/:id', (req, res, next) => {
  console.log('get / at id');
  db.gamerId(req.params.id)
  .then((gamer) => {
    db.gamersGamesData(req.params.id)
    .then((playerGames) => {
      db.gamesData()
      .then((game) => {
        let data = {
          gamer: gamer[0],
          playerGames: playerGames,
          game: game
        };
        // console.log(playerGames);
        res.render('gamer', data);
      });
    });
  });
});

// add game to player
router.post('/add-game/:id', (req, res, next) => {
  console.log('game id =', req.body.game, 'gamer id =', req.params.id);
  const data = {
    game_id: req.body.game,
    gamer_id: req.params.id
  };
  db.addJoinEntry(data)
  .then((data) => {
    res.redirect(`/gamers/${req.params.id}`);
  });
});

// delete game from gamer
router.delete('/delete-game/:gameId/:gamerId', (req, res, next) => {
  console.log('delete game from gamer', req.params.gameId, req.params.gamerId);
  db.deleteGamerGame(req.params.gameId, req.params.gamerId)
  .then((data) => {
    res.redirect(`/gamers/${req.params.gamerId}`);
  });
});

// add gamer
router.post('/', (req, res, next) => {
  console.log('post to /');
  db.newGamer(req.body)
  .then((data) => {
    res.redirect('/gamers');
  });
});

// delete gamer
router.delete('/:id', (req, res, next) => {
  console.log('delete request', req.params);
  db.deleteGamer(req.params)
  .then((data) => {
    res.redirect('/gamers');
  });
});

// put
router.put('/:id', (req, res, next) => {
  console.log('put request made', req.params, req.body);
  db.updateGamer(req.params, req.body)
  .then((data) => {
    res.redirect(`/gamers/${req.params.id}`);
  });
});

module.exports = router;
