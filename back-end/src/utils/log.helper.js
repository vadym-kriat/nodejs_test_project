
function formatDateTimeValues(num) {
  return `${num < 10 ? '0' : ''}${num}`;
}

function currentDateToString() {
  const date = new Date();

  const mounth = formatDateTimeValues(date.getMonth() + 1);
  const day = formatDateTimeValues(date.getDate());
  const hours = formatDateTimeValues(date.getHours());
  const minutes = formatDateTimeValues(date.getMinutes());
  const seconds = formatDateTimeValues(date.getSeconds());

  return `${day}.${mounth}.${date.getFullYear()} ${hours}:${minutes}:${seconds}`;
}

function log(text) {
  console.log(`INFO ${currentDateToString()} ${text}`);
}

function logErr(text) {
  console.error(`ERROR ${currentDateToString()} ${text}`);
}

module.exports = {
  log,
  logErr
};
