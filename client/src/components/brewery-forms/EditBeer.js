import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addBeer } from '../../actions/brewery';

const EditBeer = ({
  addBeer,
  beerId,
  beerName,
  beerAbv,
  beerType,
  beerDescription,
  beerImg,
  breweryId
}) => {
  const [ formData, setFormData ] = useState({
    id: '',
    name: '',
    type: '',
    abv: '',
    description: '',
    img: ''
  });

  useEffect(() => {
    setFormData({
      id: beerId,
      name: beerName,
      type: beerType,
      description: beerDescription,
      abv: beerAbv,
      img: beerImg
    })
  }, []);

  const {
    name,
    type,
    abv,
    description,
    img
  } = formData;

  const handleChange = ev => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    addBeer(formData, breweryId, 'none', true);
  }

  return (
    <form onSubmit={ev => {handleSubmit(ev)}} className='inset-form'>
      <div className='inset-form-group'>
        <input
          type='text'
          placeholder='Name *'
          name='name'
          value={name}
          onChange={ev => {handleChange(ev)}}
        />
      </div>
      <div className='inset-form-group'>
        <input
          type='text'
          placeholder='Type'
          name='type'
          value={type}
          onChange={ev => {handleChange(ev)}}
        />
      </div>
      <div className='inset-form-group'>
        <input
          type='text'
          placeholder='Alcohol by Volume'
          name='abv'
          value={abv}
          onChange={ev => {handleChange(ev)}}
        />
      </div>
      <div className='inset-form-group'>
        <input
          type='text'
          placeholder='Image'
          name='img'
          value={img}
          onChange={ev => {handleChange(ev)}}
        />
      </div>
      <div className='inset-form-group'>
        <textarea
          placeholder='Description'
          name='description'
          value={description}
          onChange={ev => {handleChange(ev)}}
          rows={5}
        ></textarea>
      </div>
      <div className='inset-form-group'>
        <input
          type='submit'
          value='Edit'
          className='btn'
        />
      </div>
    </form>
  )
};

EditBeer.propTypes = {

}

export default connect(null, { addBeer })(EditBeer);