module.exports = (req, res) => {
    console.log('User deleted');

    const bookshelf = require('../../bookshelf');

    let User = bookshelf.Model.extend({
        tableName: 'users'
    });

    let user = new User(
        {
            id: req.query.id
        }
    );

    res.send(user);

    user.destroy();
        // .then((deletedUser) => {
        //     res.send(deletedUser.toJSON());
        // });
        // .then(() => {
        //     res.send(user.toJSON());
        // });
};