module.exports = (req, res) => {
    // receive room id
    // Receive fixture id
    // Receive other fixture details or metadata
    // Write room fixtures to db
    res.send({
        property_id: 'property_id',
        property_address_id: 'property_address_id',
        customer_id: 'user_id',
        rooms: [
            {
                room_id: 'room_id',
                fixtures: [
                    {
                        room_fixture_id: 'room_fixture_id',
                        fixture_id: 'fixture_id',
                        // Fixture data
                    },
                ],
            },
        ],
    });
};

// ?????
// Would we make this accept only one or any number of fixtures and then write them to the db?
