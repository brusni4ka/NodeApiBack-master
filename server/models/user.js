'use strict';
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false
    }, 
    password:{
      type: DataTypes.STRING,
      allowNull: false
    } 
  }, {
    underscored: true
  });
  return User;
};


