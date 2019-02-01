
module.exports = {
  isFloat,
  isInteger,
  validatePhone,
  validateUser
};

function isFloat(val) {
  const res = +val;
  return !Number.isNaN(res);
}

function isInteger(val) {
  const res = +val;
  return !Number.isNaN(res) && Number.isInteger(res);
}

/**
 * @description return map with errors. If all values are valid map will be empty
 * @param phone model for validation
 * @returns {Map<any, any>} errors map
 */
function validatePhone(phone) {
  const errorMap = new Map();
  const {
    producer, model, diagonal, camera, ramMemory, storage, os, price
  } = phone;

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
  if (price && !isFloat(price) && !(+price > 0)) {
    errorMap.set('price', 'Price must be number and more then 0.');
  }
  return errorMap;
}

/**
 * @description return map with errors. If all values are valid map will be empty
 * @param user model for validation
 * @returns {Map<any, any>} errors map
 */
function validateUser(user) {
  const errorMap = new Map();
  const { username, message, rate } = user;

  if (!username || username.length > 30) {
    errorMap.set('username', 'Username can\'t be empty and must be less then 30 characters.');
  }
  if (!message || message.length > 2000) {
    errorMap.set('message', 'Message can\'t be empty and must be less then 2000 characters.');
  }
  if (rate && !isInteger(rate)) {
    errorMap.set('rate', 'Invalid rate value.');
  }
  return errorMap;
}
