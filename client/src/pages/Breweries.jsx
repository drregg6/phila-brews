import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Spinner from '../components/layout/Spinner';

import {
  reset,
  getBreweries,
  deleteBrewery
} from '../features/brewery/brewerySlice';


function Breweries() {
  const dispatch = useDispatch();

  const {
    breweries,
    loading
  } = useSelector((state) => state.brewery);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getBreweries());
    return () => {
      dispatch(reset());
    }
  }, [dispatch]);

  if (loading) {
    <div className="container">
      <Spinner />
    </div>
  }


  return (
    <>
      <div className='hero hide-sm center main-splash breweries-bg'>
        <h1 className='x-large halo'>Phila Brews</h1>
      </div>
      <div className='container'>
        <div className='breweries-container'>
          {
            breweries.map(brewery => {
            return (
                <div
                  key={brewery._id}
                  className='breweries-link center'
                  style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.35) 100%), url(${brewery.img})` }}
                >
                  { user && (
                    <button
                      className='breweries-btn btn btn-danger'
                      onClick={ev => dispatch(deleteBrewery(brewery._id))}
                    >
                      X
                    </button>
                  ) }
                  <Link className='invert-halo' to={`/breweries/${brewery._id}`}>
                    {brewery.name}
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Breweries;