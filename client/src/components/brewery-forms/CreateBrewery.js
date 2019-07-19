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
    img: '',
    available: false,
    happyOpen: '',
    happyClose: '',
    monIsOpen: true,
    tuesIsOpen: true,
    wedIsOpen: true,
    thursIsOpen: true,
    friIsOpen: true,
    satIsOpen: true,
    sunIsOpen: true,
    monOpen: '',
    monClose: '',
    tuesOpen: '',
    tuesClose: '',
    wedOpen: '',
    wedClose: '',
    thursOpen: '',
    thursClose: '',
    friOpen: '',
    friClose: '',
    satOpen: '',
    satClose: '',
    sunOpen: '',
    sunClose: ''
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
    img,
    available,
    happyOpen,
    happyClose,
    monIsOpen,
    tuesIsOpen,
    wedIsOpen,
    thursIsOpen,
    friIsOpen,
    satIsOpen,
    sunIsOpen,
    monOpen,
    tuesOpen,
    wedOpen,
    thursOpen,
    friOpen,
    satOpen,
    sunOpen,
    monClose,
    tuesClose,
    wedClose,
    thursClose,
    friClose,
    satClose,
    sunClose
  } = formData;
  const handleChange = ev => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  }
  const handleSubmit = ev => {
    ev.preventDefault();
    createBrewery(formData, history);
  }

  return (
    <div className='create-brewery'>
      <form onSubmit={ev => handleSubmit(ev)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='name'
            name='name'
            value={name}
            onChange={ev => handleChange(ev)}
          />  *
        </div>
        <div className='form-group'>
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
        </div>
        <div className='form-groupcoords'>
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
        </div>
        <div className='form-group'>
          <label htmlFor='happyHour'>Happy Hour Available?</label>
          <input
              type='radio'
              label='Yes'
              checked={available}
              onChange={() => {setFormData({ ...formData, available: !available })}}
            />
            <input
              type='radio'
              label='No'
              checked={!available}
              onChange={() => {setFormData({ ...formData, available: !available })}}
            />
            <input
              type='text'
              placeholder='Happy Hour Open'
              name='happyOpen'
              value={happyOpen}
              onChange={ev => handleChange(ev)}
              disabled={!available}
            />
            <input
              type='text'
              placeholder='Happy Hour Close'
              name='happyClose'
              value={happyClose}
              onChange={ev => handleChange(ev)}
              disabled={!available}
            />
        </div>
        <div className='form-group'>
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
        </div>
        <div className='form-group'>
          <div>
            <label>Open Monday</label>
            <input
              type='radio'
              label='Yes'
              checked={monIsOpen}
              onChange={() => {setFormData({ ...formData, monIsOpen: !monIsOpen })}}
            />
            <input
              type='radio'
              label='No'
              checked={!monIsOpen}
              onChange={() => {setFormData({ ...formData, monIsOpen: !monIsOpen })}}
            />
            <input
              type='text'
              placeholder='Monday Open'
              name='monOpen'
              value={monOpen}
              onChange={ev => handleChange(ev)}
              disabled={!monIsOpen}
            />
            <input
              type='text'
              placeholder='Monday Close'
              name='monClose'
              value={monClose}
              onChange={ev => handleChange(ev)}
              disabled={!monIsOpen}
            />
          </div>
          <div>
            <label>Open Tuesday</label>
            <input
              type='radio'
              label='Yes'
              checked={tuesIsOpen}
              onChange={() => {setFormData({ ...formData, tuesIsOpen: !tuesIsOpen })}}
            />
            <input
              type='radio'
              label='No'
              checked={!tuesIsOpen}
              onChange={() => {setFormData({ ...formData, tuesIsOpen: !tuesIsOpen })}}
            />
            <input
              type='text'
              placeholder='Tuesday Open'
              name='tuesOpen'
              value={tuesOpen}
              onChange={ev => handleChange(ev)}
              disabled={!tuesIsOpen}
            />
            <input
              type='text'
              placeholder='Tuesday Close'
              name='tuesClose'
              value={tuesClose}
              onChange={ev => handleChange(ev)}
              disabled={!tuesIsOpen}
            />
          </div>
          <div>
            <label>Open Wednesday</label>
            <input
              type='radio'
              label='Yes'
              checked={wedIsOpen}
              onChange={() => {setFormData({ ...formData, wedIsOpen: !wedIsOpen })}}
            />
            <input
              type='radio'
              label='No'
              checked={!wedIsOpen}
              onChange={() => {setFormData({ ...formData, wedIsOpen: !wedIsOpen })}}
            />
            <input
              type='text'
              placeholder='Wednesday Open'
              name='wedOpen'
              value={wedOpen}
              onChange={ev => handleChange(ev)}
              disabled={!wedIsOpen}
            />
            <input
              type='text'
              placeholder='Wednesday Close'
              name='wedClose'
              value={wedClose}
              onChange={ev => handleChange(ev)}
              disabled={!wedIsOpen}
            />
          </div>
          <div>
            <label>Open Thursday</label>
            <input
              type='radio'
              label='Yes'
              checked={thursIsOpen}
              onChange={() => {setFormData({ ...formData, thursIsOpen: !thursIsOpen })}}
            />
            <input
              type='radio'
              label='No'
              checked={!thursIsOpen}
              onChange={() => {setFormData({ ...formData, thursIsOpen: !thursIsOpen })}}
            />
            <input
              type='text'
              placeholder='Thursday Open'
              name='thursOpen'
              value={thursOpen}
              onChange={ev => handleChange(ev)}
              disabled={!thursIsOpen}
            />
            <input
              type='text'
              placeholder='Thursday Close'
              name='thursClose'
              value={thursClose}
              onChange={ev => handleChange(ev)}
              disabled={!thursIsOpen}
            />
          </div>
          <div>
            <label>Open Friday</label>
            <input
              type='radio'
              label='Yes'
              checked={friIsOpen}
              onChange={() => {setFormData({ ...formData, friIsOpen: !friIsOpen })}}
            />
            <input
              type='radio'
              label='No'
              checked={!friIsOpen}
              onChange={() => {setFormData({ ...formData, friIsOpen: !friIsOpen })}}
            />
            <input
              type='text'
              placeholder='Friday Open'
              name='friOpen'
              value={friOpen}
              onChange={ev => handleChange(ev)}
              disabled={!friIsOpen}
            />
            <input
              type='text'
              placeholder='Friday Close'
              name='friClose'
              value={friClose}
              onChange={ev => handleChange(ev)}
              disabled={!friIsOpen}
            />
          </div>
          <div>
            <label>Open Saturday</label>
            <input
              type='radio'
              label='Yes'
              checked={satIsOpen}
              onChange={() => {setFormData({ ...formData, satIsOpen: !satIsOpen })}}
            />
            <input
              type='radio'
              label='No'
              checked={!satIsOpen}
              onChange={() => {setFormData({ ...formData, satIsOpen: !satIsOpen })}}
            />
            <input
              type='text'
              placeholder='Saturday Open'
              name='satOpen'
              value={satOpen}
              onChange={ev => handleChange(ev)}
              disabled={!satIsOpen}
            />
            <input
              type='text'
              placeholder='Saturday Close'
              name='satClose'
              value={satClose}
              onChange={ev => handleChange(ev)}
              disabled={!satIsOpen}
            />
          </div>
          <div>
            <label>Open Sunday</label>
            <input
              type='radio'
              label='Yes'
              checked={sunIsOpen}
              onChange={() => {setFormData({ ...formData, sunIsOpen: !sunIsOpen })}}
            />
            <input
              type='radio'
              label='No'
              checked={!sunIsOpen}
              onChange={() => {setFormData({ ...formData, sunIsOpen: !sunIsOpen })}}
            />
            <input
              type='text'
              placeholder='Sunday Open'
              name='sunOpen'
              value={sunOpen}
              onChange={ev => handleChange(ev)}
              disabled={!sunIsOpen}
            />
            <input
              type='text'
              placeholder='Sunday Close'
              name='sunClose'
              value={sunClose}
              onChange={ev => handleChange(ev)}
              disabled={!sunIsOpen}
            />
          </div>
        </div>
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