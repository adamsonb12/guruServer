const bookshelf = require('../config/bookshelf');

require('./CompanyEmployeeRole');
bookshelf.plugin('registry');

module.exports = bookshelf.model('Role', {
  tableName: 'roles',
  defaults: {
    name_role: '',
  },
  company_employee_roles: function() {
    return this.hasMany(CompanyEmployeeRole);
  },
  hasTimeStamps: true,
});
