import React from 'react';
import PropTypes from 'prop-types';

const BreweryHours = ({
  hours: {
    monIsOpen,
    tuesIsOpen,
    wedIsOpen,
    thursIsOpen,
    friIsOpen,
    satIsOpen,
    sunIsOpen
  }
}) => {
  return (
    <div>
      {monIsOpen}
    </div>
  )
}

BreweryHours.propTypes = {
  hours: PropTypes.object.isRequired
}

export default BreweryHours;