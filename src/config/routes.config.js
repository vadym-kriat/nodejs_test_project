const { initGlobalRoutes } = require('../routes/global.routes');
const { initPhoneRoutes } = require('../routes/phone.routes');
const { initUserRoutes } = require('../routes/user.routes');

module.exports = {
  initRoutes
};

function initRoutes(app) {
  initPhoneRoutes(app);
  initUserRoutes(app);

  initGlobalRoutes(app);
}
