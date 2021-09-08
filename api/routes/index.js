const express = require("express");
const router = express.Router();
const userRouter = require('./user')
const videoGamesRouter = require('./videogames')

router.use('/users', userRouter)
router.use('/videoGames', videoGamesRouter)

module.exports = router