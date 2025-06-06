const express = require("express");
const { productModel, validateProduct } = require("../Models/product");
const router = express.Router();

router.get("/", async function (req, res) {
  let prods = await productModel.find();
  res.send(prods);
});

router.post("/", async function (req, res) {
  try {
    let { name, price, category, stock, description } = req.body;

    let { error } = validateProduct({
      name,
      price,
      category,
      stock,
      description,
    });

    if (error) return res.status(400).json({ error: error.message });

    const newProduct = await productModel.create({
      name,
      price,
      category,
      stock,
      description,
    });

    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Error creating product:", err.message);
    res.status(500).json({ error: err.message });
  }
});

router.get("/search", async (req, res) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;

    const filter = {};

    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    if (category) {
      filter.category = { $regex: category, $options: "i" };
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const products = await productModel.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

