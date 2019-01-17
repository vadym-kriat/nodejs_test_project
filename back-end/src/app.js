const http = require('http');
const { createApp, initApplication } = require('./config/application.config');
const { runDevMethods } = require('./services/test.service');
const { initRoutes } = require('./config/routes.config');
const { initServer } = require('./config/server.config');

const app = createApp();

initApplication(app)
  .then(() => {
    initRoutes(app);

    /**
     * @description run development methods
     */
    if (process.env.NODE_ENV === 'development') {
      runDevMethods();
    }

    /**
     * @description create HTTP server
     */
    const server = http.createServer(app);
    initServer(server);
  });
