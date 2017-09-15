//Returns ALL data from BD 
const ExchangeRate = require('../../models').ExchangeRate;
const CurrencyType = require('../../models').CurrencyType;
const Resource = require('../../models').Resource;
module.exports.getAllData = ()=> {
  return ExchangeRate.findAll({
    attributes: ['sell', 'buy', 'created_at'],
    include: [
      {
        model: Resource,
        attributes: ['resource'],
      },
      {
        model: CurrencyType,
        attributes: ['type_name']
      }
    ]
  })
    .then(function (currency) {
      return JSON.stringify(currency);
    });
};