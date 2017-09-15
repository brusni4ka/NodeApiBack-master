/**
 * Created by kate on 31/01/17.
 */
'use strict';
const getUsers = require('../../services/utils').getUsers;

module.exports.users = (req, res)=> {
  getUsers()
    .then(list=>res.status(201).send(list))
    .catch(error => res.status(400).send(error));
};

