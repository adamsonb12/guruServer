const PropertyAddress = require('../../../models/PropertyAddress');

module.exports = async (req, res, next) => {
    try {
        const propertyAddress = await new PropertyAddress({ id: req.query.property_address_id }).fetch();
        res.status(200).send({ propertyAddress: propertyAddress });
    } catch (err) {
        next(err);
    }
};
