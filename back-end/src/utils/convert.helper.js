
module.exports = {
  mapToJSON
};

function mapToJSON(map) {
  const res = {};
  map.forEach((value, key) => {
    res[key] = value;
  });
  return res;
}
