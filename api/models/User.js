const S = require("sequelize");
const sequelize = require("../db");
const { hash, genSalt, compareSync } = require("bcrypt");

class User extends S.Model {}
User.init(
  {
    username: {
      type: S.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize, modelName: "user" }
);

User.prototype.hashPw = function (pw, salt) {
  return hash(pw, salt);
};

User.prototype.validPassword = function (password) {
  return compareSync(password, this.password);
};

User.beforeCreate((user) => {
  return genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hashPw(user.password, salt);
    })
    .then((hash) => (user.password = hash));
});

module.exports = User;
