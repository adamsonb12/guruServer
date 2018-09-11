const bookshelf = require('../config/bookshelf');
const uuidv1 = require('uuid/v1');

require('./Property');
bookshelf.plugin('registry');

module.exports = bookshelf.model('PropertyAddress', {
  tableName: 'property_addresses',
  defaults: {
    id: uuidv1(),
    address_line_1: '',
    address_line_2: '',
    address_line_3: '',
    name_city: '',
    state: '',
    zipcode: ''
  },
  property: function() {
    return this.belongsTo(Property);
  },
  hasTimeStamps: true,
});
