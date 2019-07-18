import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createBrewery } from '../../actions/brewery';

const CreateBrewery = ({ createBrewery, history }) => {
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
    createBrewery(formData, history);
  }

  return (
    <div>
      <form onSubmit={ev => handleSubmit(ev)}>
        <input
          type='text'
          placeholder='name'
          name='name'
          value={name}
          onChange={ev => handleChange(ev)}
        /> *
        <input
          type='text'
          placeholder='building number'
          name='building'
          value={building}
          onChange={ev => handleChange(ev)}
        />
        <input
          type='text'
          placeholder='street'
          name='street'
          value={street}
          onChange={ev => handleChange(ev)}
        />
        <input
          type='text'
          placeholder='city'
          name='city'
          value={city}
          onChange={ev => handleChange(ev)}
        />
        <input
          type='text'
          placeholder='state'
          name='state'
          value={state}
          onChange={ev => handleChange(ev)}
        />
        <input
          type='text'
          placeholder='zip'
          name='zip'
          value={zip}
          onChange={ev => handleChange(ev)}
        />
        <input
          type='text'
          placeholder='lat'
          name='lat'
          value={lat}
          onChange={ev => handleChange(ev)}
        />
        <input
          type='text'
          placeholder='lng'
          name='lng'
          value={lng}
          onChange={ev => handleChange(ev)}
        />
        <input
          type='text'
          placeholder='phone'
          name='phone'
          value={phone}
          onChange={ev => handleChange(ev)}
        />
        <input
          type='text'
          placeholder='website'
          name='website'
          value={website}
          onChange={ev => handleChange(ev)}
        />
        <input
          type='text'
          placeholder='image'
          name='img'
          value={img}
          onChange={ev => handleChange(ev)}
        />
        <input
          type='checkbox'
        />
        <input
          type='submit'
          value='Add Brewery'
        />
      </form>
    </div>
  )
}

CreateBrewery.propTypes = {
  createBrewery: PropTypes.func.isRequired
}

export default connect(
  null,
  { createBrewery }
)(CreateBrewery);