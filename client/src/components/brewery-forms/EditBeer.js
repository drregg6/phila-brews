import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addBeer, getBeer } from '../../actions/brewery';

const EditBeer = ({
  history,
  match,
  addBeer,
  getBeer,
  beer,
  loading
}) => {
  const [ formData, setFormData ] = useState({
    name: '',
    type: '',
    abv: '',
    description: '',
    img: ''
  });

  useEffect(() => {
    getBeer(match.params.id, match.params.beer_id);
  }, [getBeer, match.params.id, match.params.beer_id]);

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
  console.log(beer)
  console.log(loading)
  return (
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
          placeholder='Description'
          name='description'
          value={description}
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
        <input
          type='submit'
          value='Add beer!'
          className='btn'
        />
      </div>
    </form>
  )
}

EditBeer.propTypes = {
  addBeer: PropTypes.func.isRequired,
  getBeer: PropTypes.func.isRequired,
  beer: PropTypes.object,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  beer: state.brewery.beer,
  loading: state.brewery.loading
});

export default connect(
  mapStateToProps,
  { addBeer, getBeer }
)(EditBeer);