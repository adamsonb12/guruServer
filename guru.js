require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./controllers/routes');

const User = require('./models/User');

module.exports = () => {
    const guru = express();

    guru.use(bodyParser.json());
    
    guru.get('/', (req, res) => {
        res.send({ go: 'the password is guest' });
    });

    routes(guru);
    
    guru.listen(5000);
};
