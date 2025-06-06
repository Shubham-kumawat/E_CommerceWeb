const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
require("./config/db"); 
const cookieParser = require("cookie-parser");
const passport = require("../backend/config/passport");

// Routes
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const reviewRoutes = require("./routes/review");
const cartRoutes = require("./routes/cart");
const wishlistRoutes = require("./routes/Wishlist");


app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Routes Use करें
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/reviews", reviewRoutes);
app.use("/cart", cartRoutes);
app.use("/wishlist",wishlistRoutes);



console.log(passport._strategies);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

