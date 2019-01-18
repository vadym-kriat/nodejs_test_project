
module.exports = {
  isFloat,
  isInteger
};

function isFloat(val) {
  const res = +val;
  return !Number.isNaN(res);
}

function isInteger(val) {
  const res = +val;
  return !Number.isNaN(res) && Number.isInteger(res);
}
