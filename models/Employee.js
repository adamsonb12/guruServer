const bookshelf = require('../config/bookshelf');
const uuidv1 = require('uuid/v1');

require('./User');
require('./CompanyEmployeeRole');
bookshelf.plugin('registry');

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
});
