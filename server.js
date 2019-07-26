const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connect to db
connectDB();

// Express bodyparser
app.use(express.json({ extended: false }));

// Routes
app.use('/api/breweries', require('./routes/api/breweries'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});