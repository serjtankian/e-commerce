const express = require("express");
const router = express.Router();
const userRouter = require('./user')
const videoGamesRouter = require('./videogames')
const cartRouter = require('./cart')

router.use('/users', userRouter)
router.use('/videoGames', videoGamesRouter)
router.use('/cart', cartRouter)

module.exports = router