module.exports = (req, res) => {
    console.log('Got all users');

    const bookshelf = require('../../bookshelf');

    let User = bookshelf.Model.extend({
        tableName: 'users'
    });

    User
    // .where({
    //     name: 'name 1'
    // })
        .fetchAll()
        .then((users) => {
            res.send(users);
        });
};