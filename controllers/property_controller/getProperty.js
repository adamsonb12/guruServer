const Property = require('../../models/Company');

module.exports = async (req, res, next) => {
    try {
        const property = await new Property({ id: req.query.property_id }).fetch();
        if (property) {
            res.status(200).send({ property: property });
        } else {
            res.status(404).send('Not Found: Invalid Property ID');
        }
    } catch (err) {
        next(err);
    }
};
