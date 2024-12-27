const mongoose = require("mongoose");
const Attraction = require("./attraction");

const visitorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    format: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    trim: true,
  },
  visitedAttractions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attraction",
    },
  ],
});

const visitor = mongoose.model("visitor", visitorSchema);
module.exports = visitor;
