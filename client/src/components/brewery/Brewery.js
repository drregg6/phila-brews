import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../layout/Spinner';

import { connect } from 'react-redux';
import { getBrewery } from '../../actions/brewery';

const Brewery = ({
  brewery: { brewery, loading },
  getBrewery,
  match
}) => {
  useEffect(() => {
    getBrewery(match.params.id)
  }, [getBrewery])
  return (
    <Fragment>
      { loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1>{brewery.name}</h1>
          <div>
            {brewery.phone}
          </div>
        </Fragment>
      ) }
  </Fragment>
  )
}

Brewery.propTypes = {
  brewery: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  brewery: state.brewery
})

export default connect(
  mapStateToProps,
  { getBrewery }
)(Brewery);