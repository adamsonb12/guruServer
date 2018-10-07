const bookshelf = require('../config/bookshelf');

const Company = require('./Company');
const Employee = require('./Employee');
const Crew = require('./Crew');

bookshelf.plugin('registry');
bookshelf.plugin(require('bookshelf-cascade-soft-delete'));

module.exports = bookshelf.model('CrewEmployee', {
    tableName: 'crew_employees',
    company: function() {
        return this.belongsTo(Company);
    },
    employee: function() {
        return this.belongsTo(Employee);
    },
    crew: function() {
        return this.belongsTo(Crew);
    },
    hasTimeStamps: true,
    soft: true,
});
