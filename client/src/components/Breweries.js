import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getBreweries } from '../actions/brewery';

const Breweries = ({
  brewery: { breweries, loading },
  getBreweries
}) => {
  useEffect(() => {
    getBreweries();
  }, [getBreweries])
  return (
    <Fragment>
      { loading ? (
        <h1>Hello World!</h1>
      ) : (
        breweries.map(brewery => {
          return (
            <div>
              {brewery.name}
            </div>
          )
        })
      )}
    </Fragment>
  )
}

Breweries.propTypes = {
  brewery: PropTypes.object.isRequired,
  getBreweries: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  brewery: state.brewery
});

export default connect(
  mapStateToProps,
  { getBreweries }
)(Breweries);