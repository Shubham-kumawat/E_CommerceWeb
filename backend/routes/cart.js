const express = require("express");
const { productModel, validateProduct } = require("../Models/product");
const { cartModel, validateCartItem} = require("../Models/cart");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const {User} = require("../models/User");
const mongoose = require("mongoose");


// router.post("/", authenticate, async (req, res) => {
//   try {
//     const { productId } = req.body;

//     if (!mongoose.Types.ObjectId.isValid(productId)) {
//       return res.status(400).json({ error: "Invalid Product ID" });
//     }

//     const product = await productModel.findById(productId);
//     if (!product) return res.status(404).json({ error: "Product not found" });

//     let cart = await cartModel.findOne({ user: req.user.userId });

//     if (!cart) {
//       cart = new cartModel({
//         user: req.user.userId,
//         product: [productId],
//         totalPrice: product.price,
//       });
//     } else {
//       if (!cart.product.includes(productId)) {
//         cart.product.push(productId);
//         cart.totalPrice += product.price;
//       }
//     }

//     await cart.save();
//     res.status(200).json({ message: "Product added to cart", cart });

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// router.put("/cart/:id", authenticate, async (req, res) => {
//   try {
//     const { products } = req.body;

//     if (!Array.isArray(products) || products.length === 0) {
//       return res.status(400).json({ error: "Product list is required" });
//     }

//     const validIds = products.filter(id => mongoose.Types.ObjectId.isValid(id));
//     const fetchedProducts = await productModel.find({ _id: { $in: validIds } });

//     const totalPrice = fetchedProducts.reduce((sum, p) => sum + p.price, 0);

//     const cart = await cartModel.findByIdAndUpdate(
//       req.params.id,
//       { product: validIds, totalPrice },
//       { new: true }
//     );

//     if (!cart) return res.status(404).json({ error: "Cart not found" });

//     res.status(200).json({ message: "Cart updated", cart });

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

router.post("/update", authenticate, async (req, res) => {
  const { error } = validateCartItem(req.body);
  if (error) return res.status(400).json({ error: error.message });

  const { productId, action } = req.body;
  const userId = req.user.userId;

  try {
    let cart = await cartModel.findOne({ user: userId }) || new cartModel({ user: userId, products: [], totalPrice: 0 });

    const itemIndex = cart.products.findIndex(p => p.productId.toString() === productId);

    if (action === "add") {
      if (itemIndex > -1) {
        cart.products[itemIndex].quantity += 1;
      } else {
        cart.products.push({ productId, quantity: 1 });
      }
    }

    if (action === "increment" && itemIndex > -1) {
      cart.products[itemIndex].quantity += 1;
    }

    if (action === "decrement" && itemIndex > -1) {
      cart.products[itemIndex].quantity -= 1;
      if (cart.products[itemIndex].quantity <= 0) {
        cart.products.splice(itemIndex, 1);
      }
    }

    if (action === "remove" && itemIndex > -1) {
      cart.products.splice(itemIndex, 1);
    }

    // 🔁 Recalculate totalPrice
    // let total = 0;
    // for (let item of cart.products) {
    //   const prod = await productModel.findById(item.productId);
    //   if (prod) {
    //     total += prod.price * item.quantity;
    //   }
    // }
    // cart.totalPrice = total;

    const calculateTotalPrice = async (products) => {
  let total = 0;

  for (const item of products) {
    const prod = await productModel.findById(item.productId);
    if (prod) {
      total += prod.price * item.quantity;
    }
  }

  return total;
};

cart.totalPrice = await calculateTotalPrice(cart.products);
await cart.save();


    
    res.json({ message: "Cart updated", cart });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  GET /cart — Get logged-in user's cart
router.get("/", authenticate, async (req, res) => {
  try {
    const cart = await cartModel.findOne({ user: req.user.userId }).populate("products.productId");
    if (!cart) return res.status(404).json({ error: "Cart not found" });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  DELETE /cart — Empty cart
router.delete("/", authenticate, async (req, res) => {
  try {
    const cart = await cartModel.findOneAndUpdate(
      { user: req.user.userId },
      { products: [], totalPrice: 0 },
      { new: true }
    );
    res.json({ message: "Cart emptied", cart });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




module.exports = router;






