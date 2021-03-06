const bookshelf = require('../config/bookshelf');
const uuidv1 = require('uuid/v1');

const User = require('./User');
const CompanyEmployeeRole = require('./CompanyEmployeeRole');

bookshelf.plugin('registry');
bookshelf.plugin(require('bookshelf-cascade-soft-delete'));

module.exports = bookshelf.model('Employee', {
    tableName: 'employees',
    defaults: {
        id: uuidv1(),
        user_id: '',
    },
    employee: function() {
        return this.belongsTo(User);
    },
    company_employee_roles: function() {
        return this.hasMany(CompanyEmployeeRole);
    },
    hasTimeStamps: true,
    soft: true,
});
