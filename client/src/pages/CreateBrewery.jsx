import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { createBrewery } from '../features/brewery/brewerySlice';
import { reset } from '../features/auth/authSlice';

function CreateBrewery () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

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
    mailingList: false,
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
    mailingList,
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
    dispatch(createBrewery(formData));

    navigate('/');
  }

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }

    dispatch(reset());
  }, [user, navigate, dispatch])
  return (
    <div className='create-brewery'>
      <h1 className='large'>Add a Brewery</h1>
      <form
        onSubmit={ev => handleSubmit(ev)}
        className='form'
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name *'
            name='name'
            value={name}
            onChange={ev => handleChange(ev)}
          />
        </div>
        <div className='form-group'>
          <p className='form-text'>Address</p>
          <input
            type='text'
            placeholder='Building Number'
            name='building'
            value={building}
            onChange={ev => handleChange(ev)}
          />
          <input
            type='text'
            placeholder='Street'
            name='street'
            value={street}
            onChange={ev => handleChange(ev)}
          />
          <input
            type='text'
            placeholder='City'
            name='city'
            value={city}
            onChange={ev => handleChange(ev)}
          />
          <input
            type='text'
            placeholder='State'
            name='state'
            value={state}
            onChange={ev => handleChange(ev)}
          />
          <input
            type='text'
            placeholder='Zip'
            name='zip'
            value={zip}
            onChange={ev => handleChange(ev)}
          />
        </div>
        <div className='form-group'>
          <p className='form-text'>Map Coordinates</p>
          <input
            type='text'
            placeholder='Latitude'
            name='lat'
            value={lat}
            onChange={ev => handleChange(ev)}
          />
          <input
            type='text'
            placeholder='Longitude'
            name='lng'
            value={lng}
            onChange={ev => handleChange(ev)}
          />
        </div>
        <div className='form-group'>
          <p className='form-text'>Information</p>
          <div className='my'>
            <label htmlFor='happyHour' className='form-text'>Mailing List</label>
            <label htmlFor='yes' className='form-text'>Yes</label>
            <input
              type='radio'
              name='yes'
              checked={mailingList}
              onChange={() => {setFormData({ ...formData, mailingList: !mailingList })}}
            />
            <label htmlFor='no' className='form-text'>No</label>
            <input
              type='radio'
              name='no'
              checked={!mailingList}
              onChange={() => {setFormData({ ...formData, mailingList: !mailingList })}}
            />
          </div>
          <input
            type='text'
            placeholder='Telephone'
            name='phone'
            value={phone}
            onChange={ev => handleChange(ev)}
          />
          <input
            type='text'
            placeholder='Website'
            name='website'
            value={website}
            onChange={ev => handleChange(ev)}
          />
          <input
            type='text'
            placeholder='Image'
            name='img'
            value={img}
            onChange={ev => handleChange(ev)}
          />
        </div>
        <div className='form-group'>
          <div className='my'>
            <label htmlFor='happyHour' className='form-text'>Happy Hour Available?</label>
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
            </div>
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
          <div className='form-group'>
            <div className='my'>
              <label className='form-text'>Open Monday</label>
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
          <div className='form-group'>
            <div className='my'>
              <div className='my'></div>
              <label className='form-text'>Open Tuesday</label>
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
            </div>
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
          <div className='form-group'>
            <div className='my'>
              <label className='form-text'>Open Wednesday</label>
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
            </div>
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
          <div className='form-group'>
            <div className='my'>
              <label className='form-text'>Open Thursday</label>
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
            </div>
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
          <div className='form-group'>
            <div className='my'>
              <label className='form-text'>Open Friday</label>
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
            </div>
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
          <div className='form-group'>
            <div className='my'>
              <label className='form-text'>Open Saturday</label>
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
            </div>
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
          <div className='form-group'>
            <div className='my'>
              <label className='form-text'>Open Sunday</label>
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
            </div>
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
        <div className='form-group'>
          <input
            type='submit'
            value='Add Brewery'
            className='btn'
          />
        </div>
      </form>
    </div>
  )
}

export default CreateBrewery;