const bookshelf = require('../config/bookshelf');
const uuidv1 = require('uuid/v1');

const Crew = require('./User');
const User = require('./Property');
const Property = require('./Crew');

bookshelf.plugin('registry');
bookshelf.plugin(require('bookshelf-cascade-soft-delete'));

module.exports = bookshelf.model('Job', {
    tableName: 'jobs',
    defaults: {
        id: uuidv1(),
        // when it was created
        date_scheduled: new Date(Date.now()),
        // when it's scheduled for
        date_starts: new Date(Date.now()),
        // how long the job will take - we will calculate
        estimated_duration: 0,
        // when company gets to the property
        date_arrived: '',
        // whenever company complete
        date_completed: '',
        tip_amount: 0,
    },
    crew: function() {
        return this.belongsTo(Crew);
    },
    user: function() {
        return this.belongsTo(User);
    },
    property: function() {
        return this.belongsTo(Property);
    },
    hasTimeStamps: true,
    soft: true,
});
