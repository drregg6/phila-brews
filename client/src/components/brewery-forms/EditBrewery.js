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
      img: loading || !brewery.img ? '' : brewery.img,
      monOpen: loading || !brewery.hours ? '' : brewery.hours.monOpen,
      tuesOpen: loading || !brewery.hours ? '' : brewery.hours.tuesOpen,
      wedOpen: loading || !brewery.hours ? '' : brewery.hours.wedOpen,
      thursOpen: loading || !brewery.hours ? '' : brewery.hours.thursOpen,
      friOpen: loading || !brewery.hours ? '' : brewery.hours.friOpen,
      satOpen: loading || !brewery.hours ? '' : brewery.hours.satOpen,
      sunOpen: loading || !brewery.hours ? '' : brewery.hours.sunOpen,
      monClose: loading || !brewery.hours ? '' : brewery.hours.monClose,
      tuesClose: loading || !brewery.hours ? '' : brewery.hours.tuesClose,
      wedClose: loading || !brewery.hours ? '' : brewery.hours.wedClose,
      thursClose: loading || !brewery.hours ? '' : brewery.hours.thursClose,
      friClose: loading || !brewery.hours ? '' : brewery.hours.friClose,
      satClose: loading || !brewery.hours ? '' : brewery.hours.satClose,
      sunClose: loading || !brewery.hours ? '' : brewery.hours.sunClose,
      monIsOpen: loading || !brewery.hours ? '' : brewery.hours.monIsOpen,
      tuesIsOpen: loading || !brewery.hours ? '' : brewery.hours.tuesIsOpen,
      wedIsOpen: loading || !brewery.hours ? '' : brewery.hours.wedIsOpen,
      thursIsOpen: loading || !brewery.hours ? '' : brewery.hours.thursIsOpen,
      friIsOpen: loading || !brewery.hours ? '' : brewery.hours.friIsOpen,
      satIsOpen: loading || !brewery.hours ? '' : brewery.hours.satIsOpen,
      sunIsOpen: loading || !brewery.hours ? '' : brewery.hours.sunIsOpn
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
    sunClose,
    monIsOpen
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
    createBrewery(formData, history, true);
  }

  const handleCheckbox = () => {
    setFormData({ ...formData, monIsOpen: !monIsOpen });
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
        <div>
          <div>
            <input
              type='checkbox'
              id='monIsOpen'
              name='monIsOpen'
              checked={monIsOpen}
              onChange={() => {handleCheckbox()}}
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
          <input
            type='checkbox'
            id='tuesIsOpen'
            name='tuesIsOpen'
            checked={tuesCheckbox}
            onChange={() => {handleTuesChange()}}
          />
          <label htmlFor='tuesIsOpen'>Open Tuesday</label>
          { tuesCheckbox && (
            <React.Fragment>
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
            </React.Fragment>
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


// monOpen: loading || brewery.mon === undefined ? '' : brewery.mon.monOpen,
// monClose: loading || brewery.mon === undefined ? '' : brewery.mon.monClose,
// tuesOpen: loading || brewery.tues === undefined ? '' : brewery.tues.tuesOpen,
// tuesClose: loading || brewery.tues === undefined ? '' : brewery.tues.tuesClose,
// wedOpen: loading || brewery.wed === undefined ? '' : brewery.wed.wedOpen,
// wedClose: loading || brewery.wed === undefined ? '' : brewery.wed.wedClose,
// thursOpen: loading || brewery.thurs === undefined ? '' : brewery.thurs.thursOpen,
// thursClose: loading || brewery.thurs === undefined ? '' : brewery.thurs.thursClose,
// friOpen: loading || brewery.fri === undefined ? '' : brewery.fri.friOpen,
// friClose: loading || brewery.fri === undefined ? '' : brewery.fri.friClose,
// satOpen: loading || brewery.sat === undefined ? '' : brewery.sat.satOpen,
// satClose: loading || brewery.sat === undefined ? '' : brewery.sat.satClose,
// sunOpen: loading || brewery.sun === undefined ? '' : brewery.sun.sunOpen,
// sunClose: loading || brewery.sun === undefined ? '' : brewery.sun.sunClose