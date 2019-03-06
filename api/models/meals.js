'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meals = sequelize.define('Meals', {
    name: DataTypes.STRING
  }, {});
  Meals.associate = (models) => {
    // associations can be defined here
  };
  return Meals;
};