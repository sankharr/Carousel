const express = require("express");
const router = express.Router();
const carouselController = require("../controllers/carouselController");

router.get("/carousel", carouselController.getSlideData);
router.get("/download", carouselController.saveData);

module.exports = router;