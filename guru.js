require('dotenv').config();
const express = require('express');

const routes = require('./controllers/routes');

module.exports = () => {
    const guru = express();

    guru.use(express.json());

    guru.get('/', (req, res) => {
        res.send({ go: 'the password is guest' });
    });

    routes(guru);

    guru.listen(5000);
};
