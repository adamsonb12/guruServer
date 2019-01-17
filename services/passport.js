const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
    try {
        const user = await new User({ id: id }).fetch();
        return done(null, user);
    } catch (e) {
        return done(e, null);
    }
});

passport.use(
    new LocalStrategy({ usernameField: 'email' }, async function(email, password, done) {
        try {
            const user = await new User({ email: email }).fetch();
            if (!user) {
                return done(null, false, { message: 'Incorrect email.' });
            }
            if (!(await user.validPassword(password))) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        } catch (e) {
            done(e, null);
        }
    })
);

module.exports = passport;
