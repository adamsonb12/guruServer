const { validationResult } = require('express-validator/check');

const {
    Company,
    CompanyAddress,
    CompanyEmployeeRole,
    Crew,
    CrewEmployee,
    Employee,
    Fixture,
    Job,
    Property,
    PropertyAddress,
    PropertyRoom,
    Role,
    Task,
    User,
} = require('../models');

module.exports = {
    checkValidations: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
    },

    validCompany: async id => {
        const company = await new Company({ id: id }).fetch();
        if (!company) {
            throw new Error('Invalid Company Id');
        }
    },

    validCompanyAddress: async id => {
        if (typeof id === 'number' && !isNaN(id)) {
            const companyAddress = await new CompanyAddress({ id: id }).fetch();
            if (!companyAddress) {
                throw new Error('Invalid Company Address Id');
            }
        } else {
            throw new Error(`Invalid input type: Expected a valid int. Recieved ${typeof id}: ${id}`);
        }
    },

    validCompanyEmployeeRole: async id => {
        const companyEmployeeRole = await new CompanyEmployeeRole({ id: id }).fetch();
        if (!companyEmployeeRole) {
            throw new Error('Invalid Company Employee Role Id');
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

    validEmployee: async id => {
        const employee = await new Employee({ id: id }).fetch();
        if (!employee) {
            throw new Error('Invalid Employee ID');
        }
    },

    validFixture: async id => {
        const fixture = await new Fixture({ id: id }).fetch();
        if (!fixture) {
            throw new Error('Invalid id. Fixture does not exist.');
        }
    },

    validJob: async id => {
        const job = await new Job({ id: id }).fetch();
        if(!job) {
            throw new Error('Invalid Job Id')
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

    validRole: async id => {
        const role = await new Role({ id: id }).fetch();
        if (!role) {
            throw new Error('Invalid Role Id');
        }
    },

    validTask: async id => {
        const task = await new Task({ id: id }).fetch();
        if (!task) {
            throw new Error('Invalid Role Id');
        }
    },

    validUser: async id => {
        const user = await new User({ id: id }).fetch();
        if (!user) {
            throw new Error('Invalid User ID');
        }
    },
};
