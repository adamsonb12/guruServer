const { PropertyRoom } = require('../../../models');

module.exports = async (req, res, next) => {
    try {
        const propertyRoom = await new PropertyRoom({ id: req.query.property_room_id }).fetch();
        res.status(200).send({ propertyRoom: propertyRoom });
    } catch (err) {
        next(err);
    }
};
