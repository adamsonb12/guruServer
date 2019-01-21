const bcrypt = require('bcrypt');
const bookshelf = require('../config/bookshelf');
const uuidv1 = require('uuid/v1');

const Property = require('./Property');
const Employee = require('./Employee');
const Job = require('./Job');

bookshelf.plugin('registry');
bookshelf.plugin(require('bookshelf-cascade-soft-delete'));

module.exports = bookshelf.model('User', {
    tableName: 'users',
    defaults: {
        id: uuidv1(),
        name_first: '',
        name_last: '',
        name_middle: '',
        email: '',
        password: '',
        date_birth: '',
    },
    properties: function() {
        return this.hasMany(Property);
    },
    employee: function() {
        return this.hasOne(Employee);
    },
    jobs: function() {
        return this.hasMany(Job);
    },
    hasTimeStamps: true,
    soft: true,
    validPassword: async function(password) {
        if (!password) {
            throw new Error;
        }
        return await bcrypt.compare(password, this.get('password'));
    }
});
