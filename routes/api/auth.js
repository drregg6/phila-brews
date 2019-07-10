/*

=== Login User ===
Authenticate and get token

*/

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route  /api/auth/
// @desc   Sign in / authenticate user
// @access PUBLIC
router.post('/', [
  check('email', 'Email is required')
  .not()
  .isEmpty(),
  check('password', 'Password is required')
  .not()
  .isEmpty()
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
      return res.status(400).json([{ msg: 'Invalid credentials' }]);
    }

    // If user does exist, check password vs decrypted password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json([{ msg: 'Invalid credentials' }]);
    }

    // Return token
    const payload = {
      user: {
        id: user._id
      }
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
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