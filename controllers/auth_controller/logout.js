module.exports = (req, res) => {
    req.logout();
    req.session.destroy(err => {
        if (!err) {
            res.status(200)
                .clearCookie('connect.sid', { path: '/' })
                .send({ status: 'Logged out' });
        } else {
            throw new Error(err);
        }
    });
};
