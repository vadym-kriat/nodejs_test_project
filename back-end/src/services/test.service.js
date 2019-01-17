const { log, logErr } = require('../utils/log.helper');
const { transformPhone } = require('../utils/transformer.helper');
const { Phone } = require('../model/phone.model');

module.exports = {
  runDevMethods
};

const testPhones = [
  {
    producer: 'Xiaomi',
    model: 'Mi 8 Lite',
    diagonal: 6.26,
    camera: '12 Мп + 5 Мп',
    ramMemory: 6,
    storage: 128,
    os: 'Android',
    price: 7999
  },
  {
    producer: 'Samsung',
    model: 'Galaxy S9 Plus',
    diagonal: 6.2,
    camera: '8 Мп',
    ramMemory: 6,
    storage: 64,
    os: 'Android',
    price: 29999
  }
];

function createTestPhones() {
  testPhones.forEach(p => [
    Phone.create(p)
      .then((phone) => {
        log('Phone created: ', transformPhone(phone));
      })
      .catch((err) => {
        logErr(err);
      })
  ]);
}

function runDevMethods() {
  createTestPhones();
  log('Development method has finished execution');
}
