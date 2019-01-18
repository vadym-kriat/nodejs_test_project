const { isFloat, isInteger } = require('../utils/validate.helper');
const { mapToJSON } = require('../utils/convert.helper');
const { transformPhone } = require('../utils/transformer.helper');
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

async function save(rawPhone) {
  const errorMap = validate(rawPhone);
  if (errorMap.size > 0) {
    const e = new Error('Validation error');
    e.context = mapToJSON(errorMap);
    throw e;
  }

  try {
    const phone = transformPhone(rawPhone);
    console.log(phone);

    await Phone.upsert(phone);
  } catch (e) {
    await Promise.reject(e);
  }
}

function validate(rawPhone) {
  const errorMap = new Map();
  const {
    producer, model, diagonal, camera, ramMemory, storage, os, price
  } = rawPhone;

  if (!producer || producer.length > 80) {
    errorMap.set('producer', 'Producer can\'t be empty and must be less then 80 characters.');
  }
  if (!model || model.length > 80) {
    errorMap.set('model', 'Model can\'t be empty and must be less then 80 characters.');
  }
  if (diagonal && !isFloat(diagonal)) {
    errorMap.set('diagonal', 'Diagonal must be float.');
  }
  if (camera && camera.length > 100) {
    errorMap.set('camera', 'Camera must be less then 100 characters.');
  }
  if (ramMemory && !isInteger(ramMemory) && +ramMemory > 0) {
    errorMap.set('ramMemory', 'Ram memory must be integer and more then 0.');
  }
  if (storage && !isInteger(storage) && +storage > 0) {
    errorMap.set('storage', 'Storage memory must be integer and more then 0.');
  }
  if (os && os.length > 40) {
    errorMap.set('os', 'OS must be less then 40 characters.');
  }
  if (price && isFloat(price) && +price > 0) {
    errorMap.set('price', 'Price must be number and more then 0.');
  }
  return errorMap;
}
