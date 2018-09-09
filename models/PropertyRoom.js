const bookshelf = require('../config/bookshelf');

require('./Property');
require('./Fixture');
bookshelf.plugin('registry');

module.exports = bookshelf.model('PropertyRoom', {
  tableName: 'property_rooms',
  defaults: {
    name_property_room: '',
  },
  property: function() {
    return this.belongsTo(Property);
  },
  fixtures: function() {
    return this.belongsToMany(Fixture);
  },
  hasTimeStamps: true,
});