const CompanyAddress = require('../../../models/CompanyAddress');

module.exports = async (req, res, next) => {
    const { company_id, address_line_1, address_line_2, address_line_3, name_city, state, zipcode } = req.query;
    const date = new Date();
    if ((address_line_1, name_city, state, zipcode)) {
        try {
            
            const newAddress = await new CompanyAddress({
                company_id,
                address_line_1,
                address_line_2,
                address_line_3,
                name_city,
                state,
                zipcode,
            }).save(null, { method: 'insert' });
            res.status(200).send({ address: newAddress });
        } catch (err) {
            next(err);
        }
    } else {
        res.status(404).send('Error, Invalid Address');
    }
};
