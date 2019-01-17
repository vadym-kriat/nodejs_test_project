const { api } = require('../utils/route.helper');
const { transformPhone } = require('../utils/transformer.helper');
const { Phone } = require('../model/phone.model');

module.exports = {
  initPhoneRoutes
};

function initPhoneRoutes(app) {
  app.get(api('/phones'), findAll);
}

function findAll(req, res) {
  Phone.findAll()
    .then((phones) => {
      res.send(phones.map(p => transformPhone(p)));
    })
    .catch((err) => {
      console.error(err);
    });
}
