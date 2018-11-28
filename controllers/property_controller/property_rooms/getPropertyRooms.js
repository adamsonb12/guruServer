const PropertyRoom = require('../../../models/PropertyRoom');

module.exports = async (req, res, next) => {
    try {
        const propertyRooms = await new PropertyRoom().query({ where: { property_id: req.query.property_id } }).fetchAll();
        res.status(200).send({ propertyRooms: propertyRooms });
    } catch (err) {
        next(err);
    }
};
