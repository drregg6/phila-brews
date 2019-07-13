import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const BreweryMap = ({ lat, lng }) => {
  lat = parseFloat(lat);
  lng = parseFloat(lng);

  const position = [lat, lng];
  const zoom = 13;
  const access_token = process.env.REACT_APP_MAPBOX;
  const endpoint=`https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${access_token}`;

  return (
    <Map className='brewery-map' center={position} zoom={zoom}>
      <TileLayer
        url={endpoint}
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup!
        </Popup>
      </Marker>
    </Map>
  )
}

BreweryMap.propTypes = {
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired
}

export default BreweryMap;