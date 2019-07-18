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
  const toggleMon = () => {
    setFormData({ ...formData, monIsOpen: !monIsOpen })
  }
  const toggleTues = () => {
    setFormData({ ...formData, tuesIsOpen: !tuesIsOpen })
  }
  const toggleWed = () => {
    setFormData({ ...formData, wedIsOpen: !wedIsOpen })
  }
  const toggleThurs = () => {
    setFormData({ ...formData, thursIsOpen: !thursIsOpen })
  }
  const toggleFri = () => {
    setFormData({ ...formData, friIsOpen: !friIsOpen })
  }
  const toggleSat = () => {
    setFormData({ ...formData, satIsOpen: !satIsOpen })
  }
  const toggleSun = () => {
    setFormData({ ...formData, sunIsOpen: !sunIsOpen })
  }
  const handleSubmit = ev => {
    ev.preventDefault();
    console.log(formData)
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
        />  *
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
        <div>
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
          </div>
          { monIsOpen && (
            <div>
              <input
                type='text'
                placeholder='Monday Open'
                name='monOpen'
                value={monOpen}
                onChange={ev => handleChange(ev)}
              />
              <input
                type='text'
                placeholder='Monday Close'
                name='monClose'
                value={monClose}
                onChange={ev => handleChange(ev)}
              />
            </div>
          ) }
        </div>
        <div>
          <div>
            <input
              type='checkbox'
              id='tuesIsOpen'
              name='tuesIsOpen'
              checked={tuesIsOpen}
              onChange={() => {toggleTues()}}
            />
            <label htmlFor='tuesIsOpen'>Open Tuesday</label>
          </div>
          { tuesIsOpen && (
            <div>
              <input
                type='text'
                placeholder='Tuesday Open'
                name='tuesOpen'
                value={tuesOpen}
                onChange={ev => handleChange(ev)}
              />
              <input
                type='text'
                placeholder='Tuesday Close'
                name='tuesClose'
                value={tuesClose}
                onChange={ev => handleChange(ev)}
              />
            </div>
          ) }
        </div>
        <div>
          <div>
            <input
              type='checkbox'
              id='wedIsOpen'
              name='wedIsOpen'
              checked={wedIsOpen}
              onChange={() => {toggleWed()}}
            />
            <label htmlFor='wedIsOpen'>Open Wednesday</label>
          </div>
          { wedIsOpen && (
            <div>
              <input
                type='text'
                placeholder='Wednesday Open'
                name='wedOpen'
                value={wedOpen}
                onChange={ev => handleChange(ev)}
              />
              <input
                type='text'
                placeholder='Wednesday Close'
                name='wedClose'
                value={wedClose}
                onChange={ev => handleChange(ev)}
              />
            </div>
          ) }
        </div>
        <div>
          <div>
            <input
              type='checkbox'
              id='thursIsOpen'
              name='thursIsOpen'
              checked={thursIsOpen}
              onChange={() => {toggleThurs()}}
            />
            <label htmlFor='thursIsOpen'>Open Thursday</label>
          </div>
          { thursIsOpen && (
            <div>
              <input
                type='text'
                placeholder='Thursday Open'
                name='thursOpen'
                value={thursOpen}
                onChange={ev => handleChange(ev)}
              />
              <input
                type='text'
                placeholder='Thursday Close'
                name='thursClose'
                value={thursClose}
                onChange={ev => handleChange(ev)}
              />
            </div>
          ) }
        </div>
        <div>
          <div>
            <input
              type='checkbox'
              id='friIsOpen'
              name='friIsOpen'
              checked={friIsOpen}
              onChange={() => {toggleFri()}}
            />
            <label htmlFor='friIsOpen'>Open Friday</label>
          </div>
          { friIsOpen && (
            <div>
              <input
                type='text'
                placeholder='Friday Open'
                name='friOpen'
                value={friOpen}
                onChange={ev => handleChange(ev)}
              />
              <input
                type='text'
                placeholder='Friday Close'
                name='friClose'
                value={friClose}
                onChange={ev => handleChange(ev)}
              />
            </div>
          ) }
        </div>
        <div>
          <div>
            <input
              type='checkbox'
              id='satIsOpen'
              name='satIsOpen'
              checked={satIsOpen}
              onChange={() => {toggleSat()}}
            />
            <label htmlFor='satIsOpen'>Open Saturday</label>
          </div>
          { satIsOpen && (
            <div>
              <input
                type='text'
                placeholder='Saturday Open'
                name='satOpen'
                value={satOpen}
                onChange={ev => handleChange(ev)}
              />
              <input
                type='text'
                placeholder='Saturday Close'
                name='satClose'
                value={satClose}
                onChange={ev => handleChange(ev)}
              />
            </div>
          ) }
        </div>
        <div>
          <div>
            <input
              type='checkbox'
              id='sunIsOpen'
              name='sunIsOpen'
              checked={sunIsOpen}
              onChange={() => {toggleSun()}}
            />
            <label htmlFor='sunIsOpen'>Open Sunday</label>
          </div>
          { sunIsOpen && (
            <div>
              <input
                type='text'
                placeholder='Sunday Open'
                name='sunOpen'
                value={sunOpen}
                onChange={ev => handleChange(ev)}
              />
              <input
                type='text'
                placeholder='Sunday Close'
                name='sunClose'
                value={sunClose}
                onChange={ev => handleChange(ev)}
              />
            </div>
          ) }
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


{/* <input
type='checkbox'
id='monIsOpen'
name='monIsOpen'
checked={monIsOpen}
onChange={() => {toggleMon()}}
/>
<label htmlFor='monIsOpen'>Open Monday</label> */}


// createBrewery(formData, history);