const { api } = require('../utils/route.helper');
const { logErr } = require('../utils/log.helper');
const { transformUser } = require('../utils/transformer.helper');
const { userService } = require('../services/user.service');

module.exports = {
  initUserRoutes
};

function initUserRoutes(app) {
  app.get(api('/phones/:phoneId/users'), findAllByPhoneId);
}

async function findAllByPhoneId(req, res) {
  try {
    const users = await userService.findAllByPhoneId(req.params.phoneId);
    res.send(users.map(u => transformUser(u)));
  } catch (e) {
    logErr(e);
  }
}
