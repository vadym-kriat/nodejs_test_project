const { transformPhone, mapToJSON } = require('../utils/transformer.helper');
const { validatePhone } = require('../utils/validate.helper');
const { Phone } = require('../model/phone.model');

module.exports = {
  phoneService: {
    findAll,
    findById,
    save
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

function save(rawPhone) {
  const errorMap = validatePhone(rawPhone);
  if (errorMap.size > 0) {
    const e = new Error('Validation error');
    e.context = mapToJSON(errorMap);
    throw e;
  }

  const phone = transformPhone(rawPhone);
  return Phone.upsert(phone);
}
