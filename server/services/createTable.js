const ExchangeRate = require('../models').ExchangeRate;
const Resource = require('../models').Resource;
const CurrencyType = require('../models').CurrencyType;
const isTableCurrencyNameValid = require('./helpers/valid').isTableCurrencyNameValid;

const createFromScrap = (data)=> {
  data = JSON.parse(data);
 // console.log(data);
  debugger;
  for (let key in data) {
    data[key].map((el)=> {
      let resource = key;
      let currency = el.currency.toUpperCase();
      if (!isTableCurrencyNameValid(currency)) {
        return;
      }

      Promise.all([
        Resource.findOrCreate({where: {resource: resource}}),
        CurrencyType.findOrCreate({where: {type_name: currency}})
      ])
        .then((res)=> {
          ExchangeRate.create({
            sell: el.sell,
            buy: el.buy,
            fk_type: res[1][0].get('id'),
            fk_resource: res[0][0].get('id')
          });
        });

    });
  }
};


const create = (data)=> {
      Promise.all([
        Resource.findOrCreate({where: {resource: data.resource}}),
        CurrencyType.findOrCreate({where: {type_name: data.type}})
      ])
        .then((res)=> {
          ExchangeRate.create({
            sell: data.sell,
            buy: data.buy,
            fk_type: res[1][0].get('id'),
            fk_resource: res[0][0].get('id')
          });
        });
};


module.exports = {
  create: create,
  createFromScrap:createFromScrap
};
