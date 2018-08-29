const express = require('express');

const routes = require('./controllers/routes');

const User = require('./models/User');

module.exports = () => {
  const guru = express();

  guru.get('/', (req, res) => {
    res.send({ go: 'the password is guest' });
  });

  // this is an example route here to show how to use the models to query for an record
  // See the bookshelf documentation for more examples and documentation
  guru.get('/user', (req, res) => {
    new User({ email: 'slayerofyounglings@test.com' }).fetch().then(function(user) {
      console.log('user', user);
    });
    res.send({ hello: 'there ' });
  });

  routes(guru);

  guru.listen(5000);
};
