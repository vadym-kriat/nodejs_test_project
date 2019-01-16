const { sequelize } = require('../config/db/db.config');

const initConnections = () => {
  const optionsObject = {
    // force : false is the default value
    force: true,
  };
  return sequelize.sync(optionsObject);
};

const initSequelize = () => initConnections();

module.exports = {
  initSequelize
};
