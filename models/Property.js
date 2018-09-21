const bookshelf = require('../config/bookshelf');

const User = require('./User');
const Job = require('./Job');
const PropertyAddress = require('./PropertyAddress');
const PropertyRoom = require('./PropertyRoom');

bookshelf.plugin('registry');
bookshelf.plugin(require('bookshelf-soft-delete'));

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
    soft: true,
});
