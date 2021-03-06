const { api } = require('../utils/route.helper');
const { errorHandel } = require('./error.handler');
const { logErr } = require('../utils/log.helper');
const { transformPhone } = require('../utils/transformer.helper');
const { phoneService } = require('../services/phone.service');

module.exports = {
  initPhoneRoutes
};

function initPhoneRoutes(app) {
  app.get(api('/phones'), findAll);
  app.get(api('/phones/:id'), findById);
  app.post(api('/phones'), addPhone);
}

async function findAll(req, res) {
  try {
    const phones = await phoneService.findAll();
    res.send(phones.map(p => transformPhone(p)));
  } catch (e) {
    logErr(e);
    errorHandel.serverError(e, res);
  }
}

async function findById(req, res) {
  try {
    const phone = await phoneService.findById(req.params.id);
    res.send(transformPhone(phone));
  } catch (e) {
    logErr(e);
    errorHandel.serverError(e, res);
  }
}

async function addPhone(req, res) {
  try {
    await phoneService.save(req.body);
    res.status(201).send();
  } catch (e) {
    logErr(e);
    errorHandel.serverError(e, res);
  }
}
