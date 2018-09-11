const bookshelf = require('../config/bookshelf');
const uuidv1 = require('uuid/v1');

const Role = require('./Role');
const Company = require('./Company');
const Employee = require('./Employee');

bookshelf.plugin('registry');

module.exports = bookshelf.model('CompanyEmployeeRole', {
    tableName: 'company_employee_roles',
    defaults: {
        id: uuidv1(),
    },
    role: function() {
        return this.belongsTo(Role);
    },
    company: function() {
        return this.belongsTo(Company);
    },
    employee: function() {
        return this.belongsTo(Employee);
    },
});
