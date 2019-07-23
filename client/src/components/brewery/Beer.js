import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { deleteBeer } from '../../actions/brewery';

const Beer = ({
  deleteBeer,
  isAuthenticated,
  breweryId,
  beer: { _id, name, abv, description, type, img }
}) => {
  return (
    <div className='beer-card'>
      { isAuthenticated && (
      <button
        onClick={() => {deleteBeer(breweryId, _id)}}
        className='btn-delete-beer'
      >
        X
      </button>
      ) }
      <img alt={name} src={img} />
      <h2 className='beer-head'>{name}</h2>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <span>{type}</span><span>{abv}</span>
      </div>
      <p>{description}</p>
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