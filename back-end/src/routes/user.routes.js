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

function findAllByPhoneId(req, res) {
  userService.findAllByPhoneId(req.params.phoneId)
    .then((users) => {
      res.send(users.map(u => transformUser(u)));
    })
    .catch((err) => {
      logErr(err);
    });
}
