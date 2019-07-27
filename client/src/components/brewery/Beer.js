import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteBeer } from '../../actions/brewery';
import EditBeerTwo from '../brewery-forms/EditBeerTwo';

const Beer = ({
  deleteBeer,
  isAuthenticated,
  breweryId,
  beer: { _id, name, abv, description, type, img }
}) => {
  const [ displayEditBeer, toggleEditBeer ] = useState(false);
  return (
    <div className='beer-card'>
      { isAuthenticated && (
      <button
        onClick={() => {deleteBeer(breweryId, _id)}}
        className='btn-delete-beer btn-danger'
      >
        X
      </button>
      ) }
      <img alt={name} src={img} />
      <h2 className='beer-head'>{name}</h2>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <span className='secondary'>{type}</span><span className='secondary-light'>{abv}</span>
      </div>
      <p className='primary'>{description}</p>
      { isAuthenticated && (
        // <Link to={`/breweries/${breweryId}/beers/${_id}/edit`} className='btn'>Edit</Link>
        <button className='btn' onClick={() => {toggleEditBeer(!displayEditBeer)}}>Edit Beer</button>
      ) }
      {
        displayEditBeer && (
        <div>
          <EditBeerTwo
            beerName={name}
            beerAbv={abv}
            beerType={type}
            beerDescription={description}
            beerImg={img}
          />
        </div>
        )
      }
    </div>
  )
}

Beer.propTypes = {
  beer: PropTypes.object.isRequired,
  deleteBeer: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  breweryId: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { deleteBeer }
)(Beer);