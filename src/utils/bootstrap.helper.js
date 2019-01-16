const { initSequelize } = require('./sequelize.helper');

const bootstrap = () => {
  initSequelize()
    .then(() => {
      console.log('Sequelize initialization was successful.');
    })
    .catch((err) => {
      console.error('An error has occurred in bootstrapHelper Err:');
      throw err;
    });
};

module.exports = {
  bootstrapHelper: {
    bootstrap
  }
};
