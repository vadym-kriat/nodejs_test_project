const { initGlobalRoutes } = require('../routes/global.routes');
const { initPhoneRoutes } = require('../routes/phone.routes');
const { initUserRoutes } = require('../routes/user.routes');

const initRoutes = (app) => {
  initGlobalRoutes(app);
  initPhoneRoutes(app);
  initUserRoutes(app);
};

module.exports = {
  initRoutes
};
