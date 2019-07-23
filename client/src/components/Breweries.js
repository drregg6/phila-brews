/*

Play around with breweries div sizes in the grid

*/

import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Spinner from './layout/Spinner';
import Alert from './layout/Alert';

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
    <Fragment>
      <div className='hero hide-sm center'>
        <h1 className='large'>Phila Brews</h1>
      </div>
      <div className='container'>
        <Alert />
        <div className='breweries-container'>
          { loading ? (
            <Spinner />
          ) : (
            breweries.map(brewery => {
            return (
                <div
                  key={brewery._id}
                  className='breweries-link center'
                  style={{ backgroundImage: `url('${brewery.img}')`, backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.2) 100%), url(${brewery.img})` }}
                >
                  { isAuthenticated && (
                    <button
                      className='breweries-btn btn btn-danger'
                      onClick={ev => deleteBrewery(brewery._id)}
                    >
                      X
                    </button>
                  ) }
                  <Link to={`/breweries/${brewery._id}`}>
                    {brewery.name}
                  </Link>
                </div>
              )
            })
          )}
        </div>
      </div>
    </Fragment>
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