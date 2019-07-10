const mongoose = require('mongoose');

const BeerSchema = new mongoose.Schema({
  brewery: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'brewery'
  },
  name: {
    type: String,
    required: true
  },
  abv: {
    type: String
  },
  description: {
    type: String
  },
  img: {
    type: String
  },
  type: {
    type: String
  }
});

module.exports = Beer = mongoose.model('beer', BeerSchema);