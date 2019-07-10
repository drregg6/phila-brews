const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connect to db
connectDB();

// Express Bodyparser
app.use(express.json({ extended: false }));

// Routes
app.use('/api/breweries', require('./routes/api/breweries'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});