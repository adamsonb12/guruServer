module.exports = (req, res) => {
    const User = require('../../models/User');

    let user = new User({'id': req.query.id});

    user
        .fetch()
        .then((user) => {
            res.send(user);
        });
};