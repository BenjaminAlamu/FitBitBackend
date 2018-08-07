var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},
   (username, password, callback) => {
     User.findOne({
       username: username
     }).exec( (err, user) => {

       if (err) {
         return callback(null, err);
       }
       if (!user) {
         return callback(null, false, {
           message: 'Invalid username'
         });
       }
       bcrypt.compare(password, user.password,  (err, res) => {
         if (err || !res) {
           return callback(null, false, {
             message: 'Invalid Password'
           });
         }
         return callback(null, user);
       });
     });
   }));
