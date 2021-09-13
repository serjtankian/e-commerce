const express = require("express");
const router = express.Router();
const { Categories } = require("../models/index");

router.get("/", (req, res, next) => {
  Categories.findAll().then((categories) => res.status(200).send(categories));
});

module.exports = router;
