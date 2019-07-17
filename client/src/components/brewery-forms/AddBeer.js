import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addBeer } from '../../actions/brewery';

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
    console.log(history)
    addBeer(formData, match.params.id, history);
  }
  return (
    <form onSubmit={ev => {handleSubmit(ev)}}>
      <input
        type='text'
        placeholder='name'
        name='name'
        value={name}
        onChange={ev => {handleChange(ev)}}
      />
      <input
        type='text'
        placeholder='type'
        name='type'
        value={type}
        onChange={ev => {handleChange(ev)}}
      />
      <input
        type='text'
        placeholder='abv'
        name='abv'
        value={abv}
        onChange={ev => {handleChange(ev)}}
      />
      <input
        type='text'
        placeholder='description'
        name='description'
        value={description}
        onChange={ev => {handleChange(ev)}}
      />
      <input
        type='text'
        placeholder='img'
        name='img'
        value={img}
        onChange={ev => {handleChange(ev)}}
      />
      <input
        type='submit'
        value='Add beer!'
      />
    </form>
  )
}

AddBeer.propTypes = {
  addBeer: PropTypes.func.isRequired
}

export default connect(
  null,
  { addBeer }
)(AddBeer);