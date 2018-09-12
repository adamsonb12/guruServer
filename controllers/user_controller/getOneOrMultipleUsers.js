module.exports = async (req, res) => {
    const User = require('../../models/User');

    let user = new User({'id': req.query.id});

    // TODO figure out how to get multiple users
    // TODO not all, but a few at a time

    res.send(
        await user
            .fetch()
    );
};