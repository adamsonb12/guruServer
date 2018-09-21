const bookshelf = require('../config/bookshelf');

const CompanyEmployeeRole = require('./CompanyEmployeeRole');

bookshelf.plugin('registry');
bookshelf.plugin(require('bookshelf-soft-delete'));

module.exports = bookshelf.model('Role', {
    tableName: 'roles',
    defaults: {
        name_role: '',
    },
    company_employee_roles: function() {
        return this.hasMany(CompanyEmployeeRole);
    },
    hasTimeStamps: true,
    soft: true,
});
