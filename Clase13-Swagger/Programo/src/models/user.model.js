const users = [
  { username: "David", password: "Leal", isAdmin: true },
  { username: "admin", password: "secret", isAdmin: false },
];

const findAll = () => {
  return users;
};

const createNewUser = (user) => {
  users.push(user);
};

module.exports = { findAll, createNewUser };
