/**
 * Created by kate on 27/01/17.
 */
'use strict';
module.exports = function (sequelize, DataTypes) {
  const Resource = sequelize.define('Resource', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    resource: {
      type: DataTypes.STRING
    }
  }, {
    underscored: true,
    timestamps: false
  });
  return Resource;
};


