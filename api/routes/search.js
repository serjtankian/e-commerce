const express = require("express");
const router = express.Router();
const { VideoGames, Categories } = require("../models/index");

// BUSCADOR de juegos POR Nombre & description
//ruta = `/api/search?search={inputValue}`
router.get("/", (req, res, next) => {
  let inputValue = req.query.search.toLowerCase();

  VideoGames.findAll()
    .then((arrGames) => {
      return arrGames.filter(
        (game) =>
          game.name.toLowerCase().includes(inputValue) ||
          game.description.toLowerCase().includes(inputValue)
      );
    })
    .then((matchedGames) => {
      res.status(200).send(matchedGames);
    });
});

//BUSCADOR de juegos POR Categoria
//ruta = `/api/search/category?selected={categoryName}`
router.get("/category", (req, res, next) => {
  let categoryName = req.query.selected;
  Categories.findAll({
    where: { name: categoryName },
    include: [{ model: VideoGames}],
  }).then((arrCatg) => {
    res.send(arrCatg);
  });
});

module.exports = router;
