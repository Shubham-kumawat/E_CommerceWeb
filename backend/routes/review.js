const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Review = require("../Models/Review");
const {productModel} = require("../Models/product");
const {User} = require("../models/User");
const authenticate = require("../middleware/authenticate"); 


router.post("/", authenticate, async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;

  
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid Product ID!" });
    }

    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found!" });
    }

    
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

   //create review
    const review = await Review.create({
      productId: product._id,
      productName: product.name,
      userId: user._id,
      userName: user.name,
      rating,
      comment,
    });

    res.status(201).json({ message: "Review added!", review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/:productId", async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

