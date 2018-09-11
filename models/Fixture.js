const bookshelf = require('../config/bookshelf');

require('./Task');
require('./PropertyRoom');
bookshelf.plugin('registry');

module.exports = bookshelf.model('Fixture', {
  tableName: 'fixtures',
  defaults: {
    name_fixture: '',
  },
  tasks: function() {
    return this.belongsToMany(Task);
  },
  property_rooms: function() {
    return this.belongsToMany(PropertyRoom);
  },
  hasTimeStamps: true,
});
