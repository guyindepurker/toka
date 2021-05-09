function emit(eventName, data = {}) {
  const message = { on: eventName, data };
  return JSON.stringify(message);
}
function getMessage(message) {
  return JSON.parse(message);
}
module.exports = {
  emit,
  getMessage,
};
