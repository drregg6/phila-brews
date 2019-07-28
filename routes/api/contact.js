const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const config = require('config');
const { check, validationResult } = require('express-validator');

router.post('/', [
  check('email', 'Email is required')
  .not()
  .isEmpty(),
  check('email', 'Valid email required')
  .isEmail(),
  check('msg', 'A message is required')
  .not()
  .isEmpty(),
  check('subject', 'Subject is required')
  .not()
  .isEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, subject, msg } = req.body;
  console.log(`FormData from server: ${email} - ${subject} - ${msg}`);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: config.get('user'),
      pass: config.get('pass')
    }
  });

  const mailBody = {
    to: 'philabreweryapp@gmail.com',
    from: email,
    subject: subject,
    text: `From: <${email}>\nMessage: ${msg}`
  };

  try {
    const info = await transporter.sendMail(mailBody);
    res.json({ msg: 'Email sent!' });
  } catch (err) {
    console.log(`Error from transporter: ${err.message}`);
  }
});

module.exports = router;