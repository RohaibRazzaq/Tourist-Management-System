const Visitor = require("../Models/visitor");
const Attraction = require("../Models/attraction");
const Review = require("../Models/review");

// Visitor CRUD operations
const visitorController = {
  createVisitor: async (req, res) => {
    try {
      const visitor = new Visitor(req.body);
      await visitor.save();
      res.status(201).json(visitor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAllVisitors: async (req, res) => {
    try {
      const visitors = await Visitor.find();
      res.status(200).json(visitors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getVisitorById: async (req, res) => {
    try {
      const visitor = await Visitor.findById(req.params.id);
      if (!visitor)
        return res.status(404).json({ message: "Visitor not found" });
      res.status(200).json(visitor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateVisitor: async (req, res) => {
    try {
      const visitor = await Visitor.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!visitor)
        return res.status(404).json({ message: "Visitor not found" });
      res.status(200).json(visitor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteVisitor: async (req, res) => {
    try {
      const visitor = await Visitor.findByIdAndDelete(req.params.id);
      if (!visitor)
        return res.status(404).json({ message: "Visitor not found" });
      res.status(200).json({ message: "Visitor deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

// Attraction CRUD operations
const attractionController = {
  createAttraction: async (req, res) => {
    try {
      const attraction = new Attraction(req.body);
      await attraction.save();
      res.status(201).json(attraction);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAllAttractions: async (req, res) => {
    try {
      const attractions = await Attraction.find();
      res.status(200).json(attractions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAttractionById: async (req, res) => {
    try {
      const attraction = await Attraction.findById(req.params.id);
      if (!attraction)
        return res.status(404).json({ message: "Attraction not found" });
      res.status(200).json(attraction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateAttraction: async (req, res) => {
    try {
      const attraction = await Attraction.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!attraction)
        return res.status(404).json({ message: "Attraction not found" });
      res.status(200).json(attraction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteAttraction: async (req, res) => {
    try {
      const attraction = await Attraction.findByIdAndDelete(req.params.id);
      if (!attraction)
        return res.status(404).json({ message: "Attraction not found" });
      res.status(200).json({ message: "Attraction deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

// Review CRUD operations
const reviewController = {
  createReview: async (req, res) => {
    try {
      const review = new Review(req.body);
      await review.save();
      res.status(201).json(review);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAllReviews: async (req, res) => {
    try {
      const reviews = await Review.find()
        .populate("visitor")
        .populate("attraction");
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getReviewById: async (req, res) => {
    try {
      const review = await Review.findById(req.params.id)
        .populate("visitor")
        .populate("attraction");
      if (!review) return res.status(404).json({ message: "Review not found" });
      res.status(200).json(review);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateReview: async (req, res) => {
    try {
      const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!review) return res.status(404).json({ message: "Review not found" });
      res.status(200).json(review);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteReview: async (req, res) => {
    try {
      const review = await Review.findByIdAndDelete(req.params.id);
      if (!review) return res.status(404).json({ message: "Review not found" });
      res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

const topAttractions = async (req, res) => {
  try {
    const topAttractions = await Attraction.find()
      .sort({ rating: -1 })
      .limit(5);
    res.json(topAttractions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const visitorActivity = async (req, res) => {
  try {
    const visitors = await Visitor.find().populate("visitedAttractions");
    res.json(visitors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  visitorController,
  attractionController,
  reviewController,
  topAttractions,
  visitorActivity,
};
