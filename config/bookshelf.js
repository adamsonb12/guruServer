// TODO change these variables to be based off an env or config keys files
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'guest',
    database: 'guru',
  },
});

module.exports = require('bookshelf')(knex);
