module.exports = (req, res) => {
    const User = require('../../models/User');

    let user = new User(
        {
            name_first: req.body.name_first,
            name_last: req.body.name_last,
            name_middle: req.body.name_middle,
            email: req.body.email,
            password: req.body.password,
            date_birth: req.body.date_birth
        }
    );

    user
        .save(null, {method: 'insert'})
        .then((createdUser) => {
            res.send(createdUser);
        });
};
