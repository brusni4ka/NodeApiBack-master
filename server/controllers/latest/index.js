'use strict';
const getAllData = require('../../services/utils/getAllData').getAllData;
const getDataByQuery = require('../../services/getDataByQuery').getDataByQuery;

module.exports.latest = (req, res)=> {
  let base = req.query;
  if (Object.keys(base).length===0) {
    getAllData()
      .then(list=>res.status(200).send(list))
      .catch(error => res.status(400).send(error));
  } else {
    getDataByQuery(base)
      .then(list=>res.status(200).send(list))
      .catch(error => res.status(400).send(error));
  }
};

