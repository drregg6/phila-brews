import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getBrewery, createBrewery } from '../../actions/brewery';

const CreateBrewery = ({
  createBrewery,
  getBrewery,
  match,
  history,
  brewery: {
    brewery,
    loading
  }
}) => {
  const [ formData, setFormData ] = useState({
    name: '',
    building: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    lat: '',
    lng: '',
    phone: '',
    website: '',
    img: ''
  });
  useEffect(() => {
    getBrewery(match.params.id);

    setFormData({
      name: loading || !brewery.name ? '' : brewery.name,
      building: loading || !brewery.building ? '' : brewery.building,
      street: loading || !brewery.street ? '' : brewery.street,
      city: loading || !brewery.city ? '' : brewery.city,
      state: loading || !brewery.state ? '' : brewery.state,
      zip: loading || !brewery.zip ? '' : brewery.zip,
      lat: loading || !brewery.lat ? '' : brewery.lat,
      lng: loading || !brewery.lng ? '' : brewery.lng,
      phone: loading || !brewery.phone ? '' : brewery.phone,
      website: loading || !brewery.website ? '' : brewery.website,
      img: loading || !brewery.img ? '' : brewery.img
    });
  }, [setFormData, getBrewery, match.params.id]);

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
    img
  } = formData;
  const handleChange = ev => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  }
  const handleSubmit = ev => {
    ev.preventDefault();
    createBrewery(formData, history, true);
  }

  return (
    <div>
      <form onSubmit={ev => handleSubmit(ev)}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={ev => handleChange(ev)}
        /> *
        <input
          type="text"
          placeholder="building number"
          name="building"
          value={building}
          onChange={ev => handleChange(ev)}
        />
        <input
          type="text"
          placeholder="street"
          name="street"
          value={street}
          onChange={ev => handleChange(ev)}
        />
        <input
          type="text"
          placeholder="city"
          name="city"
          value={city}
          onChange={ev => handleChange(ev)}
        />
        <input
          type="text"
          placeholder="state"
          name="state"
          value={state}
          onChange={ev => handleChange(ev)}
        />
        <input
          type="text"
          placeholder="zip"
          name="zip"
          value={zip}
          onChange={ev => handleChange(ev)}
        />
        <input
          type="text"
          placeholder="lat"
          name="lat"
          value={lat}
          onChange={ev => handleChange(ev)}
        />
        <input
          type="text"
          placeholder="lng"
          name="lng"
          value={lng}
          onChange={ev => handleChange(ev)}
        />
        <input
          type="text"
          placeholder="phone"
          name="phone"
          value={phone}
          onChange={ev => handleChange(ev)}
        />
        <input
          type="text"
          placeholder="website"
          name="website"
          value={website}
          onChange={ev => handleChange(ev)}
        />
        <input
          type="text"
          placeholder="image"
          name="img"
          value={img}
          onChange={ev => handleChange(ev)}
        />
        <input
          type="submit"
          value="Add Brewery"
        />
      </form>
    </div>
  )
}

CreateBrewery.propTypes = {
  createBrewery: PropTypes.func.isRequired,
  getBrewery: PropTypes.func.isRequired,
  brewery: PropTypes.object
}

const mapStateToProps = state => ({
  brewery: state.brewery
})

export default connect(
  mapStateToProps,
  { createBrewery, getBrewery }
)(CreateBrewery);