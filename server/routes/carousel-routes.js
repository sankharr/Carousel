const express = require("express");
const router = express.Router();
const carouselController = require("../controllers/carouselController");

router.get("/:slides", carouselController.getSlides);

module.exports = router;