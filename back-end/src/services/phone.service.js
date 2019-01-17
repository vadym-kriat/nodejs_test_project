const { Phone } = require('../model/phone.model');

module.exports = {
  phoneService: {
    findAll,
    findById
  }
};

function findAll() {
  return Phone.findAll();
}

function findById(id) {
  return Phone.find({
    where: {
      id: id
    }
  });
}
