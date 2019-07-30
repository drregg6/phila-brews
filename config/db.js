const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// console.log('NODE_ENV: ' + config.util.getEnv('NODE_ENV'));
// console.log('NODE_CONFIG_DIR: ' + config.util.getEnv('NODE_CONFIG_DIR'));

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);

    process.exit(1);
  }
}

module.exports = connectDB;