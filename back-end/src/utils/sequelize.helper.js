const { sequelize } = require('../config/db/db.config');

function initConnections() {
  const optionsObject = {
    // force : false is the default value
    force: process.env.UPDATE_DB === 'true',
  };
  return sequelize.sync(optionsObject);
}

function initSequelize() {
  return initConnections();
}

module.exports = {
  initSequelize
};
