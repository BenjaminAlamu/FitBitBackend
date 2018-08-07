/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt-nodejs');

module.exports = {
  attributes: {    
    username: {
      type: 'STRING',
      required: true,
      unique: true
    },
    number: {
      type: 'STRING',
      required: true,
    },
    firstname: {
      type: 'STRING',
      required: true,
    },
    lastname: {
      type: 'STRING',
      required: true,
    },
    email: {
      type: 'STRING',
      required: true,
      unique: true
    },
    password: {
      type: 'STRING',
      required: true
    },
    usertype: {
      type: 'STRING',
      required: true
    }

  },
  customToJSON: function () {
    return _.omit(this, ['password']);
  },
  beforeCreate: function (user, cb) {
    delete user.password_confirmation;
    bcrypt.genSalt(10,  (err, salt) => {
      if (err) {
        return {'success': failed};
      }
      bcrypt.hash(user.password, salt, null,  (err, hash) => {
        if (err){
          return {'success': failed};
        }
        user.password = hash;
        cb(null, user);
      });
    });
  }

};

