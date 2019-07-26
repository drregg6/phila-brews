const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config');
const nodemailer = require('nodemailer');

const header = {
  clientId: config.get('gmailClient'),
  clientSecret: config.get('gmailSecret'),
  refreshToken: config.get('gmailRefreshToken'),
  accessToken: config.get('gmailAccessToken')
};

router.post('/', [
  check('email', 'Email is required')
  .isEmail(),
  check('subject', 'Subject is required')
  .not()
  .isEmpty(),
  check('msg', 'Message is required')
  .not()
  .isEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      ...header
    }
  });
  const { email, subject, msg } = req.body;
  const message = {
    from: email,
    subject,
    text: msg
  };

  try {
    const email = await transporter.sendMail(message);
    if (email === err) {
      res.status(400).json({ errors: [{msg: 'Email could not be sent'}] })
    }
    res.json({msg: 'Email sent!'});
  } catch (err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
});

module.exports = router;