const express = require("express");
const router = express.Router();
const { Reviews } = require("../models/index");
const { addReview, allReview } = require("../controllers/reviewsControllers");

router.get("/vgreviews/:vgId", allReview);

router.post("/addreview/:vgId/:userId", addReview);

// router.post('/addreview/:vgId/')

module.exports = router;
