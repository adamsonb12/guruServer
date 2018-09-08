module.exports = (req, res) => {
    const User = require('../../models/User');

    let user = new User(
        {
            id: req.body.id
        }
    );

    res.send(user);

    user.destroy();
};