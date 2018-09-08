const bookshelf = require('../config/bookshelf');

require('./User');
require('./Job');
require('./PropertyAddress');
require('./PropertyRoom');
bookshelf.plugin('registry');

module.exports = bookshelf.model('Property', {
  tableName: 'users',
  defaults: {
    name_property: '',
  },
  user: function() {
    return this.belongsTo(User);
  },
  jobs: function() {
    return this.hasMany(Job);
  },
  property_address: function() {
    return this.hasOne(PropertyAddress);
  },
  property_rooms: function() {
    return this.hasMany(PropertyRoom);
  },
  hasTimeStamps: true,
});
