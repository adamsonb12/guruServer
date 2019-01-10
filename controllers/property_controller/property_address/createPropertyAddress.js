const { checkSchema } = require('express-validator/check');

const { PropertyAddress } = require('../../../models');
const { checkValidations, validProperty } = require('../../../utils/customValidations');

module.exports = {
    validation: checkSchema({
        property_id: {
            custom: {
                options: validProperty,
            },
        },
        address_line_1: {
            in: ['params', 'body'],
            errorMessage: 'address_line_1 is required',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'address_line_1 should be at least 3 characters long',
                options: { min: 3 },
            },
        },
        address_line_2: {
            in: ['params', 'body'],
            optional: true,
            errorMessage: 'address_line_2 must be a valid string',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'address_line_2 should be at least 2 characters long',
                options: { min: 2 },
            },
        },
        address_line_3: {
            in: ['params', 'body'],
            optional: true,
            errorMessage: 'address_line_3 must be a valid string',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'address_line_3 should be at least 1 characters long',
                options: { min: 1 },
            },
        },
        name_city: {
            in: ['params', 'body'],
            errorMessage: 'name_city is required',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'name_city should be at least 3 characters long',
                options: { min: 3 },
            },
        },
        state: {
            in: ['params', 'body'],
            errorMessage: 'state is required',
            trim: true,
            isString: true,
            escape: true,
            isLength: {
                errorMessage: 'state should be at least 2 characters long',
                options: { min: 2 },
            },
        },
        zipcode: {
            in: ['params', 'body'],
            errorMessage: 'zipcode is required',
            trim: true,
            isString: true,
            escape: true,
        },
    }),

    endpoint: async (req, res, next) => {
        checkValidations(req, res);
        if (!res.headersSent) {
            const { property_id, address_line_1, address_line_2, address_line_3, name_city, state, zipcode } = req.body;
            const date = new Date();
            try {
                const newAddress = await new PropertyAddress({
                    property_id,
                    address_line_1,
                    address_line_2,
                    address_line_3,
                    name_city,
                    state,
                    zipcode,
                    created_at: date,
                    updated_at: date,
                }).save(null, { method: 'insert' });
                res.status(200).send({ address: newAddress });
            } catch (err) {
                next(err);
            }
        }
    },
};
