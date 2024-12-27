const express = require("express");
const router = express.Router();

const {
  visitorController,
  attractionController,
  reviewController,
  topAttractions,
  visitorActivity,
} = require("../Controllers/controller");

router.post("/visitors", visitorController.createVisitor);
router.get("/visitors", visitorController.getAllVisitors);
router.get("/visitors/:id", visitorController.getVisitorById);
router.put("/visitors/:id", visitorController.updateVisitor);
router.delete("/visitors/:id", visitorController.deleteVisitor);

router.post("/attractions", attractionController.createAttraction);
router.get("/attractions", attractionController.getAllAttractions);
router.get("/attractions/:id", attractionController.getAttractionById);
router.put("/attractions/:id", attractionController.updateAttraction);
router.delete("/attractions/:id", attractionController.deleteAttraction);
router.get("/attractions/top", topAttractions); // Additional route for top attractions

router.post("/reviews", reviewController.createReview);
router.get("/reviews", reviewController.getAllReviews);
router.get("/reviews/:id", reviewController.getReviewById);
router.put("/reviews/:id", reviewController.updateReview);
router.delete("/reviews/:id", reviewController.deleteReview);

router.get("/visitor/activity", visitorActivity);

module.exports = router;
