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
    <div className='brewery-addr'>
      <h2 className='head underline highlight'>Address</h2>
      <p>{building} {street}</p>
      <p>{city}, {state}</p>
      <p>{zip}</p>
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