const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// doesn't look like I'm using these 3 hmmm...
const knex = require('knex');
const pg = require('pg');
const queries = require('./database/queries.js');

// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// for hbs requests other than get and post
app.use(methodOverride('_method'));
// parse that body!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// for css
app.use(express.static('public'));

// get routes
const homeRoute = require('./routes/home.js');
const gamesRoute = require('./routes/games.js');
const gamersRoute = require('./routes/gamers.js');

// use routes
app.use('/', homeRoute);
app.use('/games', gamesRoute);
app.use('/gamers', gamersRoute);

app.listen(port, () => {
  console.log('listening on 3000');
});
