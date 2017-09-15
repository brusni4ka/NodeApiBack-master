'use strict';
//Returns data from BD based on Resource
module.exports.getDataByResource = (param, last = true)=> {
  let group = last ? 'fk_type' : '';
  return ExchangeRate.findAll({
    attributes: ['sell', 'buy', 'created_at'],
    group: group,
    include: [{
      model: Resource,
      attributes: ['resource'],
      where: {
        resource: {
          $like: `%${param}%`
        }
      }
    }, {
      model: CurrencyType,
      attributes: ['type_name'],
    }]
  })
    .then(function (currency) {
      return JSON.stringify(currency);
    });
};


