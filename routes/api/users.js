/*

=== Register a User ===
Register, authenticate and get token

*/

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const config = require('config');
const { check, validationResult } = require('express-validator');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const User = require('../../models/User');
const auth = require('../../middleware/auth');

// @route  /api/users
// @desc   Register
// @access PRIVATE
router.post('/', [auth, [
  check('email', 'Please enter a valid email')
  .isEmail(),
  check('password', 'Please enter a password of at least 6 characters')
  .isLength({ min: 6 })
]],
async (req, res) => {
  // Check validations
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    email,
    password
  } = req.body;

  try {
    // Check if the user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [ { msg: 'User already exists' } ] });
    }

    // Create user
    user = new User({
      email,
      password
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save to db
    await user.save();

    // Return a token
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw error;
        res.json({ token });
      }
    )
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route  /api/users
// @desc   Delete a User
// @access PRIVATE
router.delete('/', auth, async (req, res) => {
  try {
    let user = await User.findById({ _id: req.user.id });
    if (!user) {
      return res.json({ msg: 'Invalid credentials' });
    }

    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;