'use strict';
const ExchangeRate = require('../models').ExchangeRate;
const CurrencyType = require('../models').CurrencyType;
const Resource = require('../models').Resource;
const isTableCurrencyNameValid  = require('./helpers/valid').isTableCurrencyNameValid;
const sequelize = require('sequelize');

module.exports.getDataByQuery = (params, limit = 10) => {
  let date_filter = {};
  let cy_filter={};
  let res_filter={};
  let cy = params.currency;
  let date = params.date;
  let bank = params.bank;
  if (cy && isTableCurrencyNameValid(cy)) {
    cy_filter.type_name = {
      $like: `%${cy}%`
    }
  }
  if (date) {
    date_filter.created_at = date === 'today' ?
    {
      $lt: new Date(),
      $gt: new Date(new Date() - 24 * 60 * 60 * 1000)
    }
      :
      sequelize.where(sequelize.fn('DATE_FORMAT', sequelize.col('created_at'), '%Y-%m-%d'), date);
  }
  if (bank) {
    res_filter.resource = {
      $like: `%${bank}%`
    }
  }

  return ExchangeRate.findAll({
    attributes: ['sell', 'buy', 'created_at'],
    where: date_filter,
    include: [
      {
        model: Resource,
        attributes: ['resource'],
        where:res_filter
      },
      {
        model: CurrencyType,
        attributes: ['type_name'],
        where: cy_filter
      }]
  })
    .then(function (currency) {
      return JSON.stringify(currency);
    });
};