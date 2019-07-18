import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createBrewery } from '../../actions/brewery';

const CreateBrewery = ({ createBrewery, history }) => {
  const [ monCheckbox, toggleMonCheckbox ] = useState(true);
  const [ tuesCheckbox, toggleTuesCheckbox ] = useState(true);
  const [ wedCheckbox, toggleWedCheckbox ] = useState(true);
  const [ thursCheckbox, toggleThursCheckbox ] = useState(true);
  const [ friCheckbox, toggleFriCheckbox ] = useState(true);
  const [ satCheckbox, toggleSatCheckbox ] = useState(true);
  const [ sunCheckbox, toggleSunCheckbox ] = useState(true);

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
    monOpen,
    monClose,
    tuesOpen,
    tuesClose,
    wedOpen,
    wedClose,
    thursOpen,
    thursClose,
    friOpen,
    friClose,
    satOpen,
    satClose,
    sunOpen,
    sunClose
  } = formData;
  const handleChange = ev => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  }
  const handleMonChange = () => {
    toggleMonCheckbox(!monCheckbox);
    setFormData({ ...formData, monIsOpen: !monCheckbox });
  }
  const handleTuesChange = () => {
    toggleTuesCheckbox(!tuesCheckbox);
    setFormData({ ...formData, tuesIsOpen: !tuesCheckbox });
  }
  const handleWedChange = () => {
    toggleWedCheckbox(!wedCheckbox);
    setFormData({ ...formData, wedIsOpen: !wedCheckbox });
  }
  const handleThursChange = () => {
    toggleThursCheckbox(!thursCheckbox);
    setFormData({ ...formData, thursIsOpen: !thursCheckbox });
  }
  const handleFriChange = () => {
    toggleFriCheckbox(!friCheckbox);
    setFormData({ ...formData, friIsOpen: !friCheckbox });
  }
  const handleSatChange = () => {
    toggleSatCheckbox(!satCheckbox);
    setFormData({ ...formData, satIsOpen: !satCheckbox });
  }
  const handleSunChange = () => {
    toggleSunCheckbox(!sunCheckbox);
    setFormData({ ...formData, sunIsOpen: !sunCheckbox });
  }
  const handleSubmit = ev => {
    ev.preventDefault();
    console.log(formData)
    // createBrewery(formData, history);
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
        <div>
          <div>
            <input
              type='checkbox'
              id='monIsOpen'
              name='monIsOpen'
              checked={monCheckbox}
              onChange={(ev) => {handleMonChange(ev)}}
            />
            <label htmlFor='monIsOpen'>Open Monday</label>
          </div>
          { monCheckbox && (
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
              checked={tuesCheckbox}
              onChange={() => {handleTuesChange()}}
            />
            <label htmlFor='tuesIsOpen'>Open Tuesday</label>
          </div>
          { tuesCheckbox && (
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
              checked={wedCheckbox}
              onChange={() => {handleWedChange()}}
            />
            <label htmlFor='wedIsOpen'>Open Wednesday</label>
          </div>
          { wedCheckbox && (
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
              checked={thursCheckbox}
              onChange={() => {handleThursChange()}}
            />
            <label htmlFor='thursIsOpen'>Open Thursday</label>
          </div>
          { thursCheckbox && (
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
              checked={friCheckbox}
              onChange={() => {handleFriChange()}}
            />
            <label htmlFor='friIsOpen'>Open Friday</label>
          </div>
          { friCheckbox && (
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
              checked={satCheckbox}
              onChange={() => {handleSatChange()}}
            />
            <label htmlFor='satIsOpen'>Open Saturday</label>
          </div>
          { satCheckbox && (
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
              checked={sunCheckbox}
              onChange={() => {handleSunChange()}}
            />
            <label htmlFor='sunIsOpen'>Open Sunday</label>
          </div>
          { sunCheckbox && (
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