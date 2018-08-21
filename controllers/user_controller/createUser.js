module.exports = (req, res) => {
    // receive user data
    // validate
    // write to db
    // res.send({
    //     user_id: 'user_id',
    //     // Other meta data, probably wouldn't return anything else with this
    // });

    console.log('User created');

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
        .save(null, {method: 'insert'})
        .then((createdUser) => {
            res.send(createdUser);
        });
};
