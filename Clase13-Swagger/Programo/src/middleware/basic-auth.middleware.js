const basciAuth = require("express-basic-auth");
const User = require("../models/user.model");

function myCustomAuthorizer(username, password) {
  const users = User.findAll().filter((u) => u.username === username);

  if (users.length <= 0) return false;
  const userMatches = basciAuth.safeCompare(username, users[0].username);
  const passwordMatches = basciAuth.safeCompare(password, users[0].password);

  return userMatches & passwordMatches;
}

module.exports = myCustomAuthorizer;
