// const { logErr } = require('../utils/log.helper');
const { User } = require('../model/user.model');

module.exports = {
  userService: {
    findAllByPhoneId
  }
};

function findAllByPhoneId(phoneId) {
  return User.findAll({
    where: {
      phoneId
    }
  });
}
