'use strict';
//Returns data from BD based on currency
module.exports.getDataByCy = (param, last = true)=> {
  let group = last ? 'fk_resource' : '';
  return ExchangeRate.findAll({
    attributes: ['sell', 'buy', 'created_at'],
    group: group,
    include: [
      {
        model: Resource,
        attributes: ['resource'],
      },
      {
        model: CurrencyType,
        attributes: ['type_name'],
        where: {
          type_name: {
            $like: `%${param}%`
          }
        }
      }]
  })
    .then(function (currency) {
      return JSON.stringify(currency);
    });
};