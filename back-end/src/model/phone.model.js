const Sequelize = require('sequelize');
const { sequelize } = require('../config/db/db.config');

const Phone = sequelize.define(
  'phone',
  {
    producer: {
      type: Sequelize.STRING(80), allowNull: false
    },
    model: {
      type: Sequelize.STRING(80), allowNull: false
    },
    diagonal: {
      type: Sequelize.FLOAT
    },
    camera: {
      type: Sequelize.STRING(100)
    },
    ramMemory: {
      type: Sequelize.INTEGER,
      validate: { isInt: true, min: 0 }
    },
    storage: {
      type: Sequelize.INTEGER,
      validate: { isInt: true, min: 0 }
    },
    os: {
      type: Sequelize.STRING(40),
    },
    price: {
      type: Sequelize.FLOAT,
      validate: { isFloat: true, min: 0.0 }
    }
  },
  {
    tableName: 'phone',
    // don't delete database entries but set attribute deletedAt
    paranoid: true
  }
);

module.exports = {
  Phone
};
