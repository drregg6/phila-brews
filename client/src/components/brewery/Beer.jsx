import { useState } from 'react';
import { useSelector } from 'react-redux';

import { deleteBeer } from '../../features/brewery/brewerySlice';
import EditBeer from '../brewery-forms/EditBeer';

function Beer ({
  beer: { _id, name, abv, description, type, img },
  breweryId
}) {
  const [ displayEditBeer, toggleEditBeer ] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const handleClick = () => {
    toggleEditBeer(!displayEditBeer);
  }
  return (
    <div className='beer-card'>
      { !user && (
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
      { !user && (
        <>
          <button className='btn' onClick={() => {handleClick()}}>Edit Beer</button>
        </>
      ) }
      {
        displayEditBeer && (
        <div>
          <EditBeer
            breweryId={breweryId}
            beerId={_id}
            beerName={name}
            beerAbv={abv}
            beerType={type}
            beerDescription={description}
            beerImg={img}
            handleClick={handleClick}
          />
        </div>
        )
      }
    </div>
  )
}

export default Beer;