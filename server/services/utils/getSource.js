/**
 * Created by kate on 30/01/17.
 */
const Resource = require('../../models').Resource;

module.exports.getSource = ()=> {
  return Resource.findAll()
    .then(function (currency) {
      return JSON.stringify(currency);
    });
};