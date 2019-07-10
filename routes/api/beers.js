const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Beer = require('../../models/Beer');
const auth = require('../../middleware/auth');

// @route  /api/beers/
// @desc   Get all beers
// @access PUBLIC
router.get('/', async (req, res) => {
  try {
    let beers = await Beer.find().populate('brewery', ['name']);

    res.json(beers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route  /api/beers/
// @desc   Add or update a beer
// @access PRIVATE
router.post('/', [ auth, [
  check('name', 'Name is required')
  .not()
  .isEmpty()
]],
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    name,
    abv,
    description,
    type,
    img
  } = req.body;

  const beerFields = {};
  if (name) beerFields.name = name;
  if (abv) beerFields.abv = abv;
  if (description) beerFields.description = description;
  if (type) beerFields.type = type;
  if (img) beerFields.img = img;

  try {
    // If the beer exists
    let beer = await Beer.findOne({ name });

    // Update the beer
    if (beer) {
      beer = await Beer.findOneAndUpdate(
        { name },
        { $set: beerFields },
        { new: true }
      );
    }

    // Create an instance and save
    beer = new Beer(beerFields);
    await beer.save();
    res.json(beer);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;