const bookshelf = require('../config/bookshelf');
const uuidv1 = require('uuid/v1');

const CompanyAddress = require('./CompanyAddress');
const Crew = require('./Crew');
const CompanyEmployeeRole = require('./CompanyEmployeeRole');

bookshelf.plugin('registry');
// bookshelf.plugin(require('bookshelf-soft-delete'));
// bookshelf.plugin(require('bookshelf-cascade-delete'));

module.exports = bookshelf.model('Company', {
    tableName: 'companies',
    defaults: {
        id: uuidv1(),
        name_company: '',
        shortname_company: '',
    },
    company_address: function() {
        return this.hasOne(CompanyAddress);
    },
    crews: function() {
        return this.hasMany(Crew);
    },
    company_employee_roles: function() {
        return this.hasMany(CompanyEmployeeRole);
    },
    hasTimeStamps: true,
    // soft: true
}, {
    // dependents: ['company_address'],
});
