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
        <h1 className='large'>Breweries</h1>
      </div>
      <div className='container'>
        <Alert />
        <div style={{display:'grid',gridTemplateColumns:'20rem 20rem 20rem',gridGap:'2rem'}}>
          { loading ? (
            <Spinner />
          ) : (
            breweries.map(brewery => {
              return (
                <div
                  key={brewery._id}
                  className='breweries-link center'
                  style={{backgroundImage: `url('${brewery.img}')`, backgroundSize: 'cover', backgroundRepeat: 'none', backgroundPosition: 'center', height: '20rem' }}
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