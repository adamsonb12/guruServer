module.exports = async (req, res) => {
    const { user } = req;
    const { attributes } = user;
    if (user) {
        res.status(200).send({
            user: attributes.id,
            name_first: attributes.name_first,
            name_last: attributes.name_last,
            name_middle: attributes.name_middle,
            email: attributes.email,
            date_birth: attributes.date_birth,
        });
    } else {
        res.status(401).send({ login: 'failed' });
    }
};
