const API_PREFIX = '/api';

function api(url) {
  return API_PREFIX.concat(url);
}

module.exports = {
  api
};
