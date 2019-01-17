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
    if (phone) {
      res.send(transformPhone(phone));
    } else {
      errorHandel.resourceNotFound('Phone with specified id doesn\'t exist.', res);
    }
  } catch (e) {
    logErr(e);
    errorHandel.serverError(e, res);
  }
}
