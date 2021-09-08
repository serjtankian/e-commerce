const { STRING } = require("sequelize");
const S = require("sequelize");
const sequelize = require("../db");

class VideoGames extends S.Model {}
VideoGames.init(
  {
    name: {
      type: S.STRING,
    },
    released: {
      type: S.STRING
    },
    image: {
      type: S.STRING
    },
    rating: {
      type: S.FLOAT
    },
    platforms: {
      type: S.ARRAY(STRING)
    },
    price: {
      type: S.FLOAT,
    },
    description: {
      type: S.TEXT
    },
    stock: {
      type: S.INTEGER,
    }
  },
  { sequelize, modelName: "videogames" }
);

module.exports = VideoGames;