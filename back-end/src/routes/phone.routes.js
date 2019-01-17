const { api } = require('../utils/route.helper');
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

function findAll(req, res) {
  phoneService.findAll()
    .then((phones) => {
      res.send(phones.map(p => transformPhone(p)));
    })
    .catch((err) => {
      console.error(err);
    });
}

function findById(req, res) {
  phoneService.findById(req.params.id)
    .then((phone) => {
      res.send(transformPhone(phone));
    })
    .catch((err) => {
      logErr(err);
      res.send(err);
    });
}
