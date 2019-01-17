const { log, logErr } = require('../utils/log.helper');
const { transformPhone, transformUser } = require('../utils/transformer.helper');
const { Phone } = require('../model/phone.model');
const { User } = require('../model/user.model');

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

const messages = ['Тестовое сообщение 1', 'Тестовое сообщение 2'];
const testUsers = [
  {
    username: 'Лапин Сергей',
    message: messages[0],
    rate: 5,
    phoneId: 2
  },
  {
    username: 'Павел',
    message: messages[1],
    rate: 4,
    phoneId: 2
  }
];

function createTestPhones() {
  testPhones.forEach(p => [
    Phone.create(p)
      .then((phone) => {
        log('Phone has created: ', transformPhone(phone));
      })
      .catch((err) => {
        logErr(err);
      })
  ]);
}

function createTestUsers() {
  testUsers.forEach((u) => {
    User.create(u)
      .then((user) => {
        log('User has created: ', transformUser(user));
      })
      .catch((err) => {
        logErr(err);
      });
  });
}

function runDevMethods() {
  createTestPhones();
  createTestUsers();
  log('Development method has finished execution');
}
