module.exports = (req, res) => {
    // accept property id
    // accept room details
    // Write room to db
    res.send({
        property_id: 'property_id',
        property_address_id: 'property_address_id',
        customer_id: 'user_id',
        rooms: [
            {
                room_id: 'room_id',
                fixtures: [],
            },
        ],
    });
}

// ?????
// Would we make this accept only one or any number of rooms and then write them to the db?
