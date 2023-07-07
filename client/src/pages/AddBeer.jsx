import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addBeer } from '../actions/brewery';

const AddBeer = ({
  history,
  match,
  addBeer
}) => {
  const [ formData, setFormData ] = useState({
    name: '',
    type: '',
    abv: '',
    description: '',
    img: ''
  });
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
    addBeer(formData, match.params.id, history, false);
  }
  return (
    <div className='create-beer'>
      <h1 className='large'>Add Beer</h1>
      <form onSubmit={ev => {handleSubmit(ev)}} className='form'>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name *'
            name='name'
            value={name}
            onChange={ev => {handleChange(ev)}}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Type'
            name='type'
            value={type}
            onChange={ev => {handleChange(ev)}}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Alcohol by Volume'
            name='abv'
            value={abv}
            onChange={ev => {handleChange(ev)}}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Image'
            name='img'
            value={img}
            onChange={ev => {handleChange(ev)}}
          />
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Description'
            name='description'
            value={description}
            onChange={ev => {handleChange(ev)}}
            rows={5}
          ></textarea>
        </div>
        <div className='form-group'>
          <input
            type='submit'
            value='Add beer!'
            className='btn'
          />
        </div>
      </form>
    </div>
  )
}

AddBeer.propTypes = {
  addBeer: PropTypes.func.isRequired
}

export default connect(
  null,
  { addBeer }
)(AddBeer);