module.exports = (req, res) => {
    const User = require('../../models/User');

    let user = new User(
        {
            id: req.body.id
        }
    );

    res.send(user);

    // TODO figure out how to do a soft delete
    user.destroy();
};