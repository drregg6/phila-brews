/*

Might need a GET_BEER route
Go through brewery.beers and extract the beer
Then display the information

Would need to add to ROUTES, ACTIONS, and REDUCER

EditBeer should work similarly to AddBeer
Uses the same route
Will update by using exact NAME

*/
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addBeer, getBrewery } from '../../actions/brewery';

const AddBeer = ({
  history,
  match,
  addBeer,
  getBrewery,
  brewery: { beers, loading }
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

  useEffect(() => {
    getBrewery(match.params.id);
    if (!loading &&
    beers !== null &&
    beers.length > 0) {
      beers.map(beer => console.log(beer._id));
    }
  }, [getBrewery, match.params.beer_id]);

  const handleChange = ev => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    console.log(history)
    addBeer(formData, match.params.id, history);
  }
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

AddBeer.propTypes = {
  addBeer: PropTypes.func.isRequired,
  brewery: PropTypes.object
};

const mapStateToProps = state => ({
  brewery: state.brewery
});

export default connect(
  mapStateToProps,
  { addBeer, getBrewery }
)(AddBeer);