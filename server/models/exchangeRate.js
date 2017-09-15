'use strict';
module.exports = function(sequelize, DataTypes) {
  const ExchangeRate = sequelize.define('ExchangeRate', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    sell:{
      type: DataTypes.FLOAT
    },
    buy:{
      type: DataTypes.FLOAT
    }

  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        ExchangeRate.belongsTo(models.CurrencyType,{foreignKey: 'fk_type'});
        ExchangeRate.belongsTo(models.Resource,{foreignKey: 'fk_resource'});
      }
    }
  });
  return ExchangeRate;
};