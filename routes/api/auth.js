/*

=== Login User ===
Authenticate and get token

*/

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const User = require('../../models/User');
const auth = require('../../middleware/auth');

// @route  /api/auth/
// @desc   Load user
// @access PRIVATE
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route  /api/auth/
// @desc   Sign in / authenticate user
// @access PUBLIC
router.post('/', [
  check('email', 'Please use a valid email')
  .isEmail(),
  check('password', 'Password is required')
  .exists()
],
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    // Check for user
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    // If user does exist, check password vs decrypted password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    // Return token
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      JWT_SECRET,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw error;
        res.json({ token });
      }
    )

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
})

module.exports = router;