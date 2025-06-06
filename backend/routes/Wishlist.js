const express = require("express");
const mongoose = require("mongoose");
const { Wishlist, validateWishlistAction } = require("../Models/Whislist");
const { productModel } = require("../Models/product");
const authenticate = require("../middleware/authenticate");
const { route } = require("./auth");

const router = express.Router();

//  Add to Wishlist
router.post("/add", authenticate, async (req, res) => {
  const { error } = validateWishlistAction(req.body);
  if (error) return res.status(400).json({ error: error.message });

  const userId = req.user.userId;
  const { productId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }

  const product = await productModel.findById(productId);
  if (!product) return res.status(404).json({ error: "Product not found" });

  let wishlist = await Wishlist.findOne({ user: userId });

  if (!wishlist) {
    wishlist = new Wishlist({
      user: userId,
      products: [productId],
    });
  } else {
    if (wishlist.products.includes(productId)) {
      return res.status(400).json({ error: "Product already in wishlist" });
    }
    wishlist.products.push(productId);
  }

  await wishlist.save();
  res.status(200).json({ message: "Product added to wishlist", wishlist });
});

//  Remove from Wishlist
router.delete("/remove", authenticate, async (req, res) => {
  const { error } = validateWishlistAction(req.body);
  if (error) return res.status(400).json({ error: error.message });

  const userId = req.user.userId;
  const { productId } = req.body;

  let wishlist = await Wishlist.findOne({ user: userId });
  if (!wishlist) return res.status(404).json({ error: "Wishlist not found" });

  wishlist.products = wishlist.products.filter(
    (id) => id.toString() !== productId
  );

  await wishlist.save();
  res.json({ message: "Product removed from wishlist", wishlist });
});

//  Get Wishlist
router.get("/", authenticate, async (req, res) => {
  const userId = req.user.userId;

  const wishlist = await Wishlist.findOne({ user: userId }).populate("products");
  if (!wishlist) return res.status(404).json({ error: "Wishlist not found" });

  res.json({ wishlist });
});

module.exports = router;
