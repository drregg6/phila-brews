const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Brewery = require('../../models/Brewery');

// @route  /api/breweries
// @desc   Get all breweries
// @access PUBLIC
router.get('/', async (req, res) => {
  try {
    let breweries = await Brewery.find();

    res.json(breweries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error'); 
  }
});

// @route  /api/breweries
// @desc   Create or Update a brewery
// @access PRIVATE
router.post('/', [
  check('name', 'Name is required')
  .not()
  .isEmpty()
],
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
  if (phone) breweryFields.phone = phone;
  if (website) breweryFields.website = website;
  if (mailingList) breweryFields.mailingList = mailingList;
  if (img) breweryFields.img = img;

  breweryFields.happyHour = {};
  if (available) breweryFields.happyHour.available = available;
  if (happyOpen) breweryFields.happyHour.happyOpen = happyOpen;
  if (happyClose) breweryFields.happyHour.happyClose = happyClose;

  breweryFields.hours = {};
  if (monIsOpen) breweryFields.hours.monIsOpen = monIsOpen;
  if (tuesIsOpen) breweryFields.hours.tuesIsOpen = tuesIsOpen;
  if (wedIsOpen) breweryFields.hours.wedIsOpen = wedIsOpen;
  if (thursIsOpen) breweryFields.hours.thursIsOpen = thursIsOpen;
  if (friIsOpen) breweryFields.hours.friIsOpen = friIsOpen;
  if (satIsOpen) breweryFields.hours.satIsOpen = satIsOpen;
  if (sunIsOpen) breweryFields.hours.sunIsOpen = sunIsOpen;
  if (monOpen) breweryFields.hours.monOpen = monOpen;
  if (monClose) breweryFields.hours.monClose = monClose;
  if (tuesOpen) breweryFields.hours.tuesOpen = tuesOpen;
  if (tuesClose) breweryFields.hours.tuesClose = tuesClose;
  if (wedOpen) breweryFields.hours.wedOpen = wedOpen;
  if (wedClose) breweryFields.hours.wedClose = wedClose;
  if (thursOpen) breweryFields.hours.thursOpen = thursOpen;
  if (thursClose) breweryFields.hours.thursClose = thursClose;
  if (friOpen) breweryFields.hours.friOpen = friOpen;
  if (friClose) breweryFields.hours.friClose = friClose;
  if (satOpen) breweryFields.hours.satOpen = satOpen;
  if (satClose) breweryFields.hours.satClose = satClose;
  if (sunOpen) breweryFields.hours.sunOpen = sunOpen;
  if (sunClose) breweryFields.hours.sunClose = sunClose;

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

module.exports = router;