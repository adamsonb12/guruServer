const bookshelf = require('../config/bookshelf');

require('./Company');
bookshelf.plugin('registry');

module.exports = bookshelf.model('CompanyAddress', {
  tableName: 'company_addresses',
  defaults: {
    company_id: '',
    address_line_1: '',
    address_line_2: '',
    address_line_3: '',
    name_city: '',
    state: '',
    zipcode: ''
  },
  company: function() {
    return this.belongsTo(Company);
  },
  hasTimeStamps: true,
});
