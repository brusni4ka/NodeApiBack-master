'use strict';
const getSource = require('../../services/utils').getSource;

module.exports.source = (req, res)=> {
  getSource()
      .then(list=>res.status(201).send(list))
      .catch(error => res.status(400).send(error));
};

