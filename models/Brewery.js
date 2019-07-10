const mongoose = require('mongoose');

const BrewerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  building: {
    type: String
  },
  street: {
    type: String
  },
  city: {
    type: String,
    default: 'Philadelphia'
  },
  state: {
    type: String,
    default: 'PA'
  },
  zip: {
    type: String
  },
  lat: {
    type: String
  },
  lng: {
    type: String
  },
  phone: {
    type: String
  },
  website: {
    type: String
  },
  mailingList: {
    type: Boolean,
    default: false
  },
  img: {
    type: String
  },
  happyHour: {
    available: {
      type: Boolean,
      default: false
    },
    happyOpen: {
      type: String
    },
    happyClose: {
      type: String
    }
  },
  hours: {
    monIsOpen: {
      type: Boolean,
      default: true
    },
    monOpen: {
      type: String
    },
    monClose: {
      type: String
    },
    tuesIsOpen: {
      type: Boolean,
      default: true
    },
    tuesOpen: {
      type: String
    },
    tuesClose: {
      type: String
    },
    wedIsOpen: {
      type: Boolean,
      default: true
    },
    wedOpen: {
      type: String
    },
    wedClose: {
      type: String
    },
    thursIsOpen: {
      type: Boolean,
      default: true
    },
    thursOpen: {
      type: String
    },
    thursClose: {
      type: String
    },
    friIsOpen: {
      type: Boolean,
      default: true
    },
    friOpen: {
      type: String
    },
    friClose: {
      type: String
    },
    satIsOpen: {
      type: Boolean,
      default: true
    },
    satOpen: {
      type: String
    },
    satClose: {
      type: String
    },
    sunIsOpen: {
      type: Boolean,
      default: true
    },
    sunOpen: {
      type: String
    },
    sunClose: {
      type: String
    }
  },
  beers: [
    {
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
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const Brewery = mongoose.model('brewery', BrewerySchema);

module.exports = Brewery;