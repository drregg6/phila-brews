import React from 'react';
import PropTypes from 'prop-types';

const BreweryAddress = ({
  building,
  street,
  city,
  state,
  zip
}) => {
  return (
    <div>
      {building} {street}<br />
      {city}, {state}<br />
      {zip}
    </div>
  )
}

BreweryAddress.propTypes = {
  building: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired
}

export default BreweryAddress;