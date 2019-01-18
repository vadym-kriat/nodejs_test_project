const { transformUser, mapToJSON } = require('../utils/transformer.helper');
const { validateUser } = require('../utils/validate.helper');
const { User } = require('../model/user.model');
const { Phone } = require('../model/phone.model');

module.exports = {
  userService: {
    findAllByPhoneId,
    addUser
  }
};

async function findAllByPhoneId(phoneId) {
  const phone = await Phone.findOne({
    where: {
      id: phoneId
    }
  });
  if (!phone) {
    throw new Error('Phone with specified id doesn\'t exist.');
  }

  return User.findAll({
    where: {
      phoneId
    }
  });
}

async function addUser(rawUser, phoneId) {
  const errorMap = validateUser(rawUser);
  if (errorMap.size > 0) {
    const e = new Error('Validation error');
    e.context = mapToJSON(errorMap);
    throw e;
  }

  const phone = await Phone.findOne({
    where: {
      id: phoneId
    }
  });
  if (!phone) {
    throw new Error('Phone with specified id doesn\'t exist.');
  }

  const user = transformUser(rawUser);
  user.phoneId = phone.id;
  return User.create(user);
}
