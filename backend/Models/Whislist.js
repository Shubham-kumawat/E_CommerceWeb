const mongoose = require("mongoose");
const Joi = require("joi");

const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    }
  ]
}, { timestamps: true });

const validateWishlistAction = (data) => {
  const schema = Joi.object({
    productId: Joi.string().hex().length(24).required()
  });

  return schema.validate(data);
};

module.exports = {
  Wishlist: mongoose.model("Wishlist", wishlistSchema),
  validateWishlistAction
};
