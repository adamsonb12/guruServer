const bookshelf = require('../config/bookshelf');

const Task = require('./Task');
const PropertyRoom = require('./PropertyRoom');

bookshelf.plugin('registry');
bookshelf.plugin(require('bookshelf-soft-delete'));

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
    soft: true,
});
