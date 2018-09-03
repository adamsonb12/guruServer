const bookshelf = require('../config/bookshelf');
const uuidv1 = require('uuidv1');

require('./CompanyAddress');
require('./Crew');
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
  hasTimeStamps: true,
});
