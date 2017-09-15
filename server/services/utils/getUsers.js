const Users = require('../../models').Users;

module.exports.getUsers = ()=> {
  return Users.findAll()
    .then(function (users) {
      return JSON.stringify(users);
    });
};