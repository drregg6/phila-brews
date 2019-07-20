import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Spinner from './layout/Spinner';

import { connect } from 'react-redux';
import { getBreweries } from '../actions/brewery';
import { deleteBrewery } from '../actions/brewery';

const Breweries = ({
  brewery: { breweries, loading },
  getBreweries,
  deleteBrewery,
  auth: { isAuthenticated }
}) => {
  useEffect(() => {
    getBreweries();
  }, [getBreweries])
  return (
    <div className='container'>
      { loading ? (
        <Spinner />
      ) : (
        breweries.map(brewery => {
          return (
            <div key={brewery._id} className='breweries-link center'>
              <Link to={`/breweries/${brewery._id}`}>
                {brewery.name}
              </Link>
              { isAuthenticated && (
                <button
                  className='breweries-btn btn btn-danger'
                  onClick={ev => deleteBrewery(brewery._id)}
                >
                  X
                </button>
              ) }
            </div>
          )
        })
      )}
    </div>
  )
}

Breweries.propTypes = {
  brewery: PropTypes.object.isRequired,
  auth: PropTypes.object,
  getBreweries: PropTypes.func.isRequired,
  deleteBrewery: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  brewery: state.brewery,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getBreweries, deleteBrewery }
)(Breweries);