module.exports = async (req, res) => {
    const User = require('../../models/User');

    res.send(
        await User
            .fetchAll()
    );
};