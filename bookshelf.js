const knex = require('knex')({
    client: 'postgresql',
    connection: {
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        charset: 'utf8'
    }
});

module.exports = require('bookshelf')(knex);