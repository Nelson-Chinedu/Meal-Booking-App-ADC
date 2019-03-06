'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menus = sequelize.define('Menus', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.STRING
  }, {});
  Menus.associate = function(models) {
    // associations can be defined here
  };
  return Menus;
};