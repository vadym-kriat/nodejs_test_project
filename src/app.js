const http = require('http');
const { createApp, initApplication } = require('./config/application.config');
const { initRoutes } = require('./config/routes.config');
const { initServer } = require('./config/server.config');

const app = createApp();

initApplication(app);
initRoutes(app);

/**
 * @description create HTTP server
 */
const server = http.createServer(app);
initServer(server);
