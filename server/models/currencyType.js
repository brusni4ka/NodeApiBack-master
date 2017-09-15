'use strict';
module.exports = function (sequelize, DataTypes) {
  const CurrencyType = sequelize.define('CurrencyType', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type_name: {
      type: DataTypes.STRING
    }

  }, {
    underscored: true,
    timestamps: false
  });
  return CurrencyType;
};