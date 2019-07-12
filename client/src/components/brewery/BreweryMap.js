import React from 'react';
import PropTypes from 'prop-types';

const BreweryMap = ({ lat, lng }) => {
  return (
    <div>
      lat: {lat}<br />
      lng: {lng}
    </div>
  )
}

BreweryMap.propTypes = {
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired
}

export default BreweryMap;