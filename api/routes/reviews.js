const express = require('express')
const router = express.Router()
const { Reviews } = require('../models/index')
const { addReview } = require('../controllers/reviewsControllers')

router.post('/addreview/:vgId/:userId', addReview)

module.exports = router