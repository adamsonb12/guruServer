const bookshelf = require('../config/bookshelf');

const Fixture = require('./Fixture');

bookshelf.plugin('registry');
bookshelf.plugin(require('bookshelf-cascade-soft-delete'));

module.exports = bookshelf.model('Task', {
    tableName: 'tasks',
    defaults: {
        name_task: '',
    },
    fixtures: function() {
        return this.belongsToMany(Fixture);
    },
    hasTimeStamps: true,
    soft: true,
});
