module.exports = {
  transformPhone,
  transformUser,
  mapToJSON
};

function transformPhone(phone) {
  return {
    id: +phone.id,
    producer: phone.producer,
    model: phone.model,
    diagonal: phone.diagonal ? +phone.diagonal : null,
    camera: phone.camera,
    ramMemory: phone.ramMemory ? +phone.ramMemory : null,
    storage: phone.storage ? +phone.storage : null,
    os: phone.os,
    price: phone.price ? +phone.price : null
  };
}

function transformUser(user) {
  return {
    id: user.id,
    username: user.username,
    message: user.message,
    rate: user.rate ? +user.rate : null,
    phoneId: user.phoneId
  };
}

function mapToJSON(map) {
  const res = {};
  map.forEach((value, key) => {
    res[key] = value;
  });
  return res;
}
