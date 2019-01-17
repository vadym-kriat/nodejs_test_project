const { log, logErr } = require('../utils/log.helper');
const { transformPhone } = require('../utils/transformer.helper');
const { Phone } = require('../model/phone.model');

module.exports = {
  runDevMethods
};

function createTestPhones() {
  Phone.create({
    producer: 'Xiaomi',
    model: 'Mi 8 Lite',
    diagonal: 6.26,
    camera: '12 Мп + 5 Мп',
    ramMemory: 6,
    storage: 128,
    os: 'Android'
  })
    .then((phone) => {
      log('Phone created: ', transformPhone(phone));
    })
    .catch((err) => {
      logErr(err);
    });
}

function runDevMethods() {
  createTestPhones();
  log('Development method has finished execution');
}
