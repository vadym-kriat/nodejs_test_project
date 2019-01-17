const Sequelize = require('sequelize');
const { mysqlConfig } = require('./mysql/mysql.dev.config');

const buildConnection = config => (
  new Sequelize(config.schemaName, config.user, config.password, {
    host: config.address,
    port: config.port,
    // for tests
    dialect: config.dialect,
    storage: config.storage
  })
);

const sequelize = buildConnection(mysqlConfig);

module.exports = {
  sequelize
};
