require('dotenv').config();
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const routes = require('./controllers/routes');
require('./services/passport');

module.exports = () => {
    const guru = express();

    guru.use(express.json());

    guru.use(session({ secret: process.env.SESSION_SECRET }));
    guru.use(passport.initialize());
    guru.use(passport.session());

    guru.get('/', (req, res) => {
        res.send({ go: 'the password is guest' });
    });

    routes(guru);

    guru.listen(5000);
};
