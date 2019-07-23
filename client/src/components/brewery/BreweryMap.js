import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const BreweryMap = ({ lat, lng, name }) => {
  lat = parseFloat(lat);
  lng = parseFloat(lng);

  const position = [lat, lng];
  const zoom = 15;
  const access_token = process.env.REACT_APP_MAPBOX;
  const endpoint=`https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${access_token}`;

  return (
    <Map
      className='brewery-map'
      center={position}
      zoom={zoom}
      zoomControl={false}
      scrollWheelZoom={false}
      touchZoom={false}
      doubleClickZoom={false} 
      closePopupOnClick={false}
      dragging={false}
      zoomSnap={false}
      zoomDelta={false}
      trackResize={false}
    >
      <TileLayer
        url={endpoint}
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          {name}
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