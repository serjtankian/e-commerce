const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const videoGamesRouter = require("./videogames");
const cartRouter = require("./cart");
const searchRouter = require("./search");
const categoriesRouter = require("./categories");

router.use("/users", userRouter);
router.use("/videoGames", videoGamesRouter);
router.use("/cart", cartRouter);
router.use("/search", searchRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
