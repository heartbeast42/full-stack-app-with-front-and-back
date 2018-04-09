// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgrespl://localhost/galvanize_games'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
