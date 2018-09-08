module.exports = (req, res) => {
    const User = require('../../models/User');

    User
        .fetchAll()
        .then((users) => {
            res.send(users);
        });
};