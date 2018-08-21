module.exports = (req, res) => {
    console.log('User updated');

    const bookshelf = require('../../bookshelf');

    let User = bookshelf.Model.extend({
        tableName: 'users'
    });

    let user = new User(
        {
            // need to figure out how to get id to be auto generated
            id: req.query.id,
            name_first: req.query.name_first,
            name_last: req.query.name_last,
            name_middle: req.query.name_middle,
            email: req.query.email,
            password: req.query.password,
            date_birth: req.query.date_birth
        }
    );

    user
        .save()
        .then((updatedUser) => {
            res.send(updatedUser);
        });
};