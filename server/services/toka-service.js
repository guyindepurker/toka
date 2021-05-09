const database = require('../database/database.json');
async function query() {
  try {
    return database;
  } catch (err) {
    throw err;
  }
}
module.exports = {
  query,
};
