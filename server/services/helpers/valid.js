const types = require('../../constants/dbConst').currencyTableName;



const isTableCurrencyNameValid = (name)=> {
  for (let key in types) {
    if (types[key] == name) {
      return true;
    }
  }
  return false;
};


module.exports = {
  isTableCurrencyNameValid: isTableCurrencyNameValid
};