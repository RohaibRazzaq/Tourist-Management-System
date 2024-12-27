const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  attraction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Attraction",
    required: true,
  },
  visitor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "visitor",
    required: true,
  },
  score: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
