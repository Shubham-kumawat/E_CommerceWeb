const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", 
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Review", reviewSchema);