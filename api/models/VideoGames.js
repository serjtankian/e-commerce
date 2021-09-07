const S = require("sequelize");
const sequelize = require("../db");

class VideoGames extends S.Model {}
VideoGames.init(
  {
    name: {
      type: S.STRING,
    },
    // apiID: {
    //   type: S.INTEGER,
    //   primaryKey: true
    // },
    price: {
      type: S.INTEGER,
    },
  },
  { sequelize, modelName: "videogames" }
);

module.exports = VideoGames;
