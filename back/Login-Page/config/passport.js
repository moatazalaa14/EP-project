const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')

// Load User Model 
const User = require('../models/User.js')

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            // Match User
            User.find({ email: email })
                .then(user => {
                    if(!user) {
                        return done(null, false, { message: 'That email is not registered '})
                    }

                    // Match password
                    bcrypt.compare(password.toString(), user[0].password, (err, isMatch) => {
                        if(err) {
                            return res.status(500).json({
                                error: err
                            })
                        };
                        if(isMatch) {
                            return done(null, user)
                        } else {
                            return done(null, false, { message: 'Password incorrect'})
                        }
                    })
                })
                .catch(err => { console.log(err)
                })
        })
    )
    
    // attach the user id to the session so we can get it back through the session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

      // get the whole user back when needed
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}