const Sequelize = require('sequelize');

const db = new Sequelize('mealApp', 'postgres', 'emmanuel10', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 1000,
  },
});

module.exports = db;
