const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const { bootstrapHelper } = require('../utils/bootstrap.helper');

function createApp() {
  return express();
}

function initViewAndStyles(app) {
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'pug');

  app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
  }));
  app.use(express.static(path.join(__dirname, '../public')));
}

function initApplication(app) {
  initViewAndStyles(app);

  app.use(logger('dev'));
  app.use(express.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser());
  app.use(bodyParser.json());

  return bootstrapHelper.bootstrap();
}

module.exports = {
  createApp,
  initApplication
};
