import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../components/layout/Spinner';
import BreweryAddress from '../components/brewery/BreweryAddress';
import BreweryHours from '../components/brewery/BreweryHours';
import BreweryInfo from '../components/brewery/BreweryInfo';
import BreweryMap from '../components/brewery/BreweryMap';
import Beer from '../components/brewery/Beer';

import { getBrewery, reset } from '../features/brewery/brewerySlice';

import isCurrentlyOpen from '../utils/isCurrentlyOpen';

function Brewery() {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();

  const {
    brewery,
    loading
  } = useSelector((state) => state.brewery);

  useEffect(() => {
    dispatch(getBrewery(id));
    return () => {
      dispatch(reset());
    }
  }, [dispatch, id]);

  const currentlyOpen = loading || brewery === null ? '' : isCurrentlyOpen(brewery.hours);

  if (loading || brewery === null) {
    return (
      <div className="container">
        <Spinner />
      </div>
    )
  }

  return (
    <div>
      <div
        className='hero center brewery-splash'
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.2) 100%), url(${brewery.img})`
        }}
      >
        <h1 className='invert-halo secondary'>
          {brewery.name}
        </h1>
        { currentlyOpen ? (
          <h4 className='brewery-sign success halo'>Open!</h4>
        ) : (
          <h4 className='brewery-sign danger halo'>Closed...</h4>
        )}
      </div>
      <div className='container'>
        {/* {isAuthenticated && (
          <Link to={`/breweries/${id}/edit`} className='btn btn-edit-brewery'>Edit this brewery</Link>
        )} */}
        <div className='brewery-group'>
          <BreweryInfo
            phone={brewery.phone}
            website={brewery.website}
            mailingList={brewery.mailingList}
            happyHour={brewery.happyHour}
          />
          <BreweryAddress
            building={brewery.building}
            street={brewery.street}
            city={brewery.city}
            state={brewery.state}
            zip={brewery.zip}
          />
          <BreweryHours
            hours={brewery.hours}
          />
        </div>
        <BreweryMap
          name={brewery.name}
          lat={brewery.lat}
          lng={brewery.lng}
        />
        <h2 className='head underline'>Beers</h2>
        <div className='beers'>
          { loading || !brewery.beers ? ('') : brewery.beers.length > 0 ? (
            <>
              {brewery.beers.map(beer => {
                return (
                  <Beer
                    key={beer._id}
                    beer={beer}
                    breweryId={id}
                  />
                )
              })}
            </>
          ) : (
            <>
              <div></div>
              <div>Nothing.</div>
              <div>Yet.</div>
              <div></div>
            </>
          ) }
        </div>
      </div>
      {/* { isAuthenticated && (
        <>
          <Link to={`/breweries/${id}/beers`} className='btn'>Add a beer</Link>
        </>
      ) } */}
  </div>
  )
}

export default Brewery;