const { Property } = require('../../../models');

module.exports = async (req, res, next) => {
    try {
        const properties = await new Property().fetchAll({ require: true });
        res.status(200).send({ properties: properties });
    } catch (err) {
        next(err);
    }
};
