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
    <div>
      <img alt={name} src={img} /><br />
      {name} | {type} | {abv}
      { isAuthenticated && (
      <button
        onClick={() => {deleteBeer(breweryId, _id)}}
      >
        X
      </button>
      ) }<br/>
      {description}
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