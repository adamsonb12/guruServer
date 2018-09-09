const bookshelf = require('../config/bookshelf');
const uuidv1 = require('uuid/v1');

require('./CompanyAddress');
require('./Crew');
require('./CompanyEmployeeRole');
bookshelf.plugin('registry');

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
});