const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Brewery = require('../../models/Brewery');
const auth = require('../../middleware/auth');
const formatTime = require('../../utils/formatTime');
const formatPhone = require('../../utils/formatPhone');

// @route  /api/breweries/:id
// @desc   Get all breweries
// @access PUBLIC
router.get('/', async (req, res) => {
  try {
    let breweries = await Brewery.find().sort({name:1});

    res.json(breweries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error'); 
  }
});

// @route  /api/breweries
// @desc   Create or Update a brewery
// @access PRIVATE
router.post('/', [ auth, [
  check('name', 'Name is required')
  .not()
  .isEmpty()
]],
 async (req, res) => {
   // Validate the body
   // If there are errors in the array, throw an error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    name,
    building,
    street,
    city,
    state,
    zip,
    lat,
    lng,
    phone,
    website,
    mailingList,
    img,
    available,
    happyOpen,
    happyClose,
    monIsOpen,
    tuesIsOpen,
    wedIsOpen,
    thursIsOpen,
    friIsOpen,
    satIsOpen,
    sunIsOpen,
    monOpen,
    tuesOpen,
    wedOpen,
    thursOpen,
    friOpen,
    satOpen,
    sunOpen,
    monClose,
    tuesClose,
    wedClose,
    thursClose,
    friClose,
    satClose,
    sunClose
  } = req.body;

  const breweryFields = {};
  if (name) breweryFields.name = name;
  if (building) breweryFields.building = building;
  if (street) breweryFields.street = street;
  if (city) breweryFields.city = city;
  if (state) breweryFields.state = state;
  if (zip) breweryFields.zip = zip;
  if (lat) breweryFields.lat = lat;
  if (lng) breweryFields.lng = lng;
  if (phone) breweryFields.phone = formatPhone(phone);
  if (website) breweryFields.website = website;
  if (mailingList) breweryFields.mailingList = mailingList;
  if (img) breweryFields.img = img;

  breweryFields.happyHour = {};
  if (available) breweryFields.happyHour.available = available;
  if (happyOpen) breweryFields.happyHour.happyOpen = formatTime(happyOpen);
  if (happyClose) breweryFields.happyHour.happyClose = formatTime(happyClose);

  breweryFields.hours = {};
  breweryFields.hours.monIsOpen = monIsOpen;
  breweryFields.hours.tuesIsOpen = tuesIsOpen;
  breweryFields.hours.wedIsOpen = wedIsOpen;
  breweryFields.hours.thursIsOpen = thursIsOpen;
  breweryFields.hours.friIsOpen = friIsOpen;
  breweryFields.hours.satIsOpen = satIsOpen;
  breweryFields.hours.sunIsOpen = sunIsOpen;
  if (monOpen) breweryFields.hours.monOpen = formatTime(monOpen);
  if (monClose) breweryFields.hours.monClose = formatTime(monClose);
  if (tuesOpen) breweryFields.hours.tuesOpen = formatTime(tuesOpen);
  if (tuesClose) breweryFields.hours.tuesClose = formatTime(tuesClose);
  if (wedOpen) breweryFields.hours.wedOpen = formatTime(wedOpen);
  if (wedClose) breweryFields.hours.wedClose = formatTime(wedClose);
  if (thursOpen) breweryFields.hours.thursOpen = formatTime(thursOpen);
  if (thursClose) breweryFields.hours.thursClose = formatTime(thursClose);
  if (friOpen) breweryFields.hours.friOpen = formatTime(friOpen);
  if (friClose) breweryFields.hours.friClose = formatTime(friClose);
  if (satOpen) breweryFields.hours.satOpen = formatTime(satOpen);
  if (satClose) breweryFields.hours.satClose = formatTime(satClose);
  if (sunOpen) breweryFields.hours.sunOpen = formatTime(sunOpen);
  if (sunClose) breweryFields.hours.sunClose = formatTime(sunClose);

  try {
    // Try to find a brewery
    let brewery = await Brewery.findOne({ name: breweryFields.name });

    // If it exists, update
    if (brewery) {
      brewery = await Brewery.findOneAndUpdate(
        { name: breweryFields.name },
        { $set: breweryFields },
        { new: true }
      );

      return res.json(brewery);
    }

    // If not, create a new brewery
    brewery =  new Brewery(breweryFields);
    await brewery.save();
    res.json(brewery);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route  /api/breweries/:id
// @desc   Get a brewery
// @access PUBLIC
router.get('/:id', async (req, res) => {
  try {
    let brewery = await Brewery.findById(req.params.id);

    if (!brewery) {
      return res.status(400).json({ msg: 'Brewery cannot be found' });
    }

    res.json(brewery);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Brewery cannot be found' });
    }
    res.status(500).send('Server error');
  }
});

// @route  /api/breweries/:id
// @desc   Delete a Brewery
// @access PRIVATE
router.delete('/:id', auth, async (req, res) => {
  try {
    let brewery = await Brewery.findById( req.params.id );
    if (!brewery) {
      return res.status(400).json({ msg: 'Brewery not found' });
    }

    await brewery.remove();
    res.json({ msg: 'Brewery deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route  /api/breweries/:id/beers/:beer_id
// @desc   Get a Beer
// @access PUBLIC
router.get('/:id/beers/:beer_id', async (req, res) => {
  const { id, beer_id } = req.params;

  try {
    let brewery = await Brewery.findOne({ _id: id });
    if (!brewery) {
      res.status(400).json({ msg: 'Brewery cannot be found' });
    }
    let beer = brewery.beers.find(beer => beer.id === beer_id);
    console.log(beer);
    res.json(beer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route  /api/breweries/:id/beers
// @desc   Update brewery with a new beer
// @access PRIVATE
router.put('/:id/beers', [ auth, [
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
    id,
    name,
    abv,
    description,
    type,
    img
  } = req.body;

  const beerFields = {};
  if (id) beerFields.id = id;
  if (name) beerFields.name = name;
  if (abv) beerFields.abv = abv;
  if (description) beerFields.description = description;
  if (type) beerFields.type = type;
  if (img) beerFields.img = img;

  try {
    // Find the brewery - throw an error if the brewery cannot be found
    let brewery = await Brewery.findOne({ _id: req.params.id });
    if (!brewery) {
      return res.status(400).json({ msg: 'Brewery cannot be found' });
    }

    // See if the beer exists
    let beer = brewery.beers.find(beer => beer._id.toString() === beerFields.id);
    // Update beer
    if (beer) {
      console.log('Beer found, let\'s update!');
      brewery = await Brewery.findOneAndUpdate(
        { _id: req.params.id, 'beers._id': beerFields.id},
        { $set: { 'beers.$': beerFields } },
        { new: true }
      );
      
      return res.json(brewery);
    }
    
    // Push new beer into beers
    brewery.beers.push(beerFields);
    await brewery.save();
    res.json(brewery);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route  /api/breweries/:brewery_id/beers/:beer_id
// @desc   Delete a beer
// @access PRIVATE
router.delete('/:brewery_id/beers/:beer_id', auth, async (req, res) => {
  try {
    let brewery = await Brewery.findOne({ _id: req.params.brewery_id });
    if (!brewery) {
      return res.status(400).json({ msg: 'Brewery cannot be found' });
    }

    const removeIndex = brewery.beers.map(beer => beer.id).indexOf(req.params.beer_id);
    brewery.beers.splice(removeIndex, 1);

    await brewery.save();
    res.json(brewery);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;