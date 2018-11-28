const { body, validationResult } = require('express-validator/check');

const Company = require('../models/Company');
const CompanyAddress = require('../models/CompanyAddress');
const Crew = require('../models/Crew');
const CrewEmployee = require('../models/CrewEmployee');
const Employee = require('../models/Employee');
const User = require('../models/User');
const Property = require('../models/Property');
const PropertyAddress = require('../models/PropertyAddress');
const PropertyRoom = require('../models/PropertyRoom');

module.exports = {
    checkValidations: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
    },

    schemaValidCompany: async id => {
        const company = await new Company({ id: id }).fetch();
        if (!company) {
            throw new Error('Invalid Company Id');
        }
    },

    standardValidCompany: body('company_id').custom(async id => {
        const company = await new Company({ id: id }).fetch();
        if (!company) {
            throw new Error('Invalid Company Id');
        }
    }),

    schemaValidCompanyAddress: async id => {
        if (typeof id === 'number' && !isNaN(id)) {
            const companyAddress = await new CompanyAddress({ id: id }).fetch();
            if (!companyAddress) {
                throw new Error('Invalid Company Address Id');
            }
        } else {
            throw new Error(`Invalid input type: Expected a valid int. Recieved ${typeof id}: ${id}`);
        }
    },

    schemaValidUser: async id => {
        const user = await new User({ id: id }).fetch();
        if (!user) {
            throw new Error('Invalid User ID');
        }
    },

    schemaValidEmployee: async id => {
        const employee = await new Employee({ id: id }).fetch();
        if (!employee) {
            throw new Error('Invalid Employee ID');
        }
    },

    validCrew: async id => {
        const crew = await new Crew({ id: id }).fetch();
        if (!crew) {
            throw new Error('Invalid Company Crew Id');
        }
    },

    validCrewEmployee: async id => {
        const crewEmployee = await new CrewEmployee({ id: id }).fetch();
        if (!crewEmployee) {
            throw new Error('Invalid Company Crew Employee Id');
        }
    },

    validEmail: async email => {
        const user = await new User({ email: email }).fetch();
        if (user) {
            throw new Error('Email already in use');
        }
    },

    validProperty: async id => {
        const property = await new Property({ id: id }).fetch();
        if (!property) {
            throw new Error('Invalid Property Id');
        }
    },

    validPropertyAddress: async id => {
        const propertyAddress = await new PropertyAddress({ id: id }).fetch();
        if (!propertyAddress) {
            throw new Error('Invalid Property Address Id');
        }
    },

    validPropertyRoom: async id => {
        const propertyRoom = await new PropertyRoom({ id: id }).fetch();
        if (!propertyRoom) {
            throw new Error('Invalid Property Room Id');
        }
    },
};
