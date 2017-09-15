'use strict';

//Returns data from BD based on Date
module.exports.getDataByDate = (param, last = true)=> {
  let group = last ? 'fk_resource' : '';
  param = param ? param.toLowerCase() : 'today';
  let selectParams = param === 'today' ?
  {
    created_at: {
      $lt: new Date(),
      $gt: new Date(new Date() - 24 * 60 * 60 * 1000)
    }
  }
    :
    sequelize.where(sequelize.fn('DATE_FORMAT', sequelize.col('created_at'), '%Y-%m-%d'), param);


  return ExchangeRate.findAll({
    attributes: ['sell', 'buy', 'created_at'],
    where: selectParams,
    include: [
      {
        model: Resource,
        attributes: ['resource']
      },
      {
        model: CurrencyType,
        attributes: ['type_name']
      }
    ],
    group: group
  })
    .then(function (currency) {
      return JSON.stringify(currency);
    });
};