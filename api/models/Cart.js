const S = require("sequelize");
const sequelize = require("../db");

class Cart extends S.Model {}

Cart.init(
  {
    videoGames: {
      type: S.ARRAY,
    },

    cuanty: {
      type: S.INTEGER,
    },
    price: {
      type: S.INTEGER,
    },
  },
  { sequelize: DB, modelName: "cart" }
);

module.exports = Cart;
