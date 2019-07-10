const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connect to db
connectDB();

app.get('/', (req, res) => {
  res.send('Hello world! :)');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});