
function transformPhone(phone) {
  return {
    id: +phone.id,
    producer: phone.producer,
    model: phone.model,
    diagonal: +phone.diagonal,
    camera: phone.camera,
    ramMemory: +phone.ramMemory,
    storage: +phone.storage,
    os: phone.os,
    price: +phone.price
  };
}

function transformUser(user) {
  return {
    id: user.id,
    username: user.username,
    message: user.message,
    rate: user.rate,
    phoneId: user.phoneId
  };
}

module.exports = {
  transformPhone,
  transformUser
};
