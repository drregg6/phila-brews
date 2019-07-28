const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const config = require('config');
const { check, validationResult } = require('express-validator');

router.post('/', async (req, res) => {
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
    console.log(info.response);
  } catch (err) {
    console.log(`Error from transporter: ${err.message}`);
  }
});

module.exports = router;