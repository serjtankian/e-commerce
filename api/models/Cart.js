const { STRING } = require("sequelize");
const S = require("sequelize");
const sequelize = require("../db");

class Cart extends S.Model {}

Cart.init(
  {
    quantity: {
      type: S.INTEGER,
      defaultValue: 0,
      set: function (value) {
            let quantity = this.getDataValue("quantity") + value
            this.setDataValue("quantity", quantity);
          },
    },
    price: {
      type: S.INTEGER,
    },
    status:{
      type: S.ENUM('open','close'),
    },
  },
  { sequelize, modelName: "cart" }
);


module.exports = Cart;
