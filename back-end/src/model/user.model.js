const Sequelize = require('sequelize');
const { sequelize } = require('../config/db/db.config');
const { Phone } = require('./phone.model');

const User = sequelize.define(
  'user',
  {
    username: {
      type: Sequelize.STRING(30), allowNull: false
    },
    message: {
      type: Sequelize.TEXT, allowNull: false
    },
    rate: {
      type: Sequelize.INTEGER,
      allowNull: true,

      validate: {
        isInt: true, min: 0, max: 10
      }
    },
    phoneId: {
      type: Sequelize.INTEGER,
      allowNull: false,

      references: {
        model: Phone,
        key: 'id'
      }
    }
  },
  {
    tableName: 'user',
    // don't delete database entries but set attribute deletedAt
    paranoid: true
  }
);

module.exports = {
  User
};
