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
      validate: { isInt: true, min: 0, max: 10 }
    },
    phone_id: {
      type: Sequelize.INTEGER,

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
