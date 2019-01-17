const { log, logErr } = require('../utils/log.helper');
const { Phone } = require('../model/phone.model');

function createTestPhone() {
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
      log('Phone created: ', phone);
    })
    .catch((err) => {
      logErr(err);
    });
}

function runDevMethods() {
  createTestPhone();
  log('Development method has finished execution');
}

module.exports = {
  runDevMethods
};
