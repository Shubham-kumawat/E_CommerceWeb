const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.post("/register", async (req, res) => {
  try {
   const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { name, email, password, phone, addresses } = req.body;

    
    let userExists = await User.findOne({ email });
    if (userExists) return res.status(400).send("Email already in use");

    
    const hashedPassword = await bcrypt.hash(password, 10);


    let newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      ...(phone && { phone }), // Only include if provided
      ...(addresses && { addresses }), // Only include if provided
    });

    // Prepare response without password
    const userResponse = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      ...(newUser.phone && { phone: newUser.phone }),
      ...(newUser.addresses && { addresses: newUser.addresses }),
      createdAt: newUser.createdAt,
    };

    res.status(201).send({
      message: "User registered",
      user: userResponse,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    // Find user by email only
    let user = await User.findOne({ email });
    if (!user) return res.status(400).send("Invalid email or password");

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid email or password");

    // Create token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,

      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    // Return only essential user info
    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };

    res.send({
      message: "Login successful",
      user: userResponse,
      token,
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({ error: err.message });
  }
});

// Google OAuth Routes
router.get('/google',
  passport.authenticate('google', { 
    scope: ['profile', 'email'],
    session: false 
  })
);

router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/login',
    session: false 
  }),
  (req, res) => {
   const token = jwt.sign(
      { userId: req.user._id }, 
      process.env.JWT_SECRET, 
      { expiresIn: '30d' }
    );
    
    res.json({ 
      message: 'Google login successful',
      token,
      user: {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
      }
    });
  }
);


router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});









router.get('/facebook', 
  passport.authenticate('facebook', { 
    scope: ['email'],
    session: false 
  })
);

router.get('/facebook/callback',
  passport.authenticate('facebook', { 
    failureRedirect: '/login',
    session: false 
  }),
  (req, res) => {
    // Successful authentication
    const token = jwt.sign(
      { userId: req.user._id },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );
    
    res.json({ 
      token,
      user: req.user 
    });
  }
);



module.exports = router;
