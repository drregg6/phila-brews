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
  mon: {
    day: {
      type: String,
      default: 'Monday'
    },
    isOpen: {
      type: Boolean,
      default: true
    },
    open: {
      type: String
    },
    close: {
      type: String
    }
  },
  tues: {
    day: {
      type: String,
      default: 'Tuesday'
    },
    isOpen: {
      type: Boolean,
      default: true
    },
    open: {
      type: String
    },
    close: {
      type: String
    }
  },
  wed: {
    day: {
      type: String,
      default: 'Wednesday'
    },
    isOpen: {
      type: Boolean,
      default: true
    },
    open: {
      type: String
    },
    close: {
      type: String
    }
  },
  thurs: {
    day: {
      type: String,
      default: 'Thursday'
    },
    isOpen: {
      type: Boolean,
      default: true
    },
    open: {
      type: String
    },
    close: {
      type: String
    }
  },
  fri: {
    day: {
      type: String,
      default: 'Friday'
    },
    isOpen: {
      type: Boolean,
      default: true
    },
    open: {
      type: String
    },
    close: {
      type: String
    }
  },
  sat: {
    day: {
      type: String,
      default: 'Saturday'
    },
    isOpen: {
      type: Boolean,
      default: true
    },
    open: {
      type: String
    },
    close: {
      type: String
    }
  },
  sun: {
    day: {
      type: String,
      default: 'Sunday'
    },
    isOpen: {
      type: Boolean,
      default: true
    },
    open: {
      type: String
    },
    close: {
      type: String
    }
  },
  happyHour: {
    available: {
      type: Boolean,
      default: false
    },
    open: {
      type: String
    },
    close: {
      type: String
    }
  }
});

const Brewery = mongoose.model('brewery', BrewerySchema);

export default Brewery;