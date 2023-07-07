import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addBeer } from '../../features/brewery/brewerySlice';

function EditBeer ({
  beerId,
  beerName,
  beerAbv,
  beerType,
  beerDescription,
  beerImg,
  breweryId,
  handleClick
}) {
  const dispatch = useDispatch();

  const [ formData, setFormData ] = useState({
    id: '',
    name: '',
    type: '',
    abv: '',
    description: '',
    img: ''
  });

  useEffect(() => {
    setFormData({
      id: beerId,
      name: beerName,
      type: beerType,
      description: beerDescription,
      abv: beerAbv,
      img: beerImg
    })
  }, [beerAbv, beerDescription, beerId, beerImg, beerName, beerType]);

  const {
    name,
    type,
    abv,
    description,
    img
  } = formData;

  const handleChange = ev => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    const data = {
      beer: formData,
      id: breweryId
    }

    dispatch(addBeer(data));
    handleClick();
  }

  return (
    <form onSubmit={ev => {handleSubmit(ev)}} className='inset-form'>
      <div className='inset-form-group'>
        <input
          type='text'
          placeholder='Name *'
          name='name'
          value={name}
          onChange={ev => {handleChange(ev)}}
        />
      </div>
      <div className='inset-form-group'>
        <input
          type='text'
          placeholder='Type'
          name='type'
          value={type}
          onChange={ev => {handleChange(ev)}}
        />
      </div>
      <div className='inset-form-group'>
        <input
          type='text'
          placeholder='Alcohol by Volume'
          name='abv'
          value={abv}
          onChange={ev => {handleChange(ev)}}
        />
      </div>
      <div className='inset-form-group'>
        <input
          type='text'
          placeholder='Image'
          name='img'
          value={img}
          onChange={ev => {handleChange(ev)}}
        />
      </div>
      <div className='inset-form-group'>
        <textarea
          placeholder='Description'
          name='description'
          value={description}
          onChange={ev => {handleChange(ev)}}
          rows={5}
        ></textarea>
      </div>
      <div className='inset-form-group'>
        <input
          type='submit'
          value='Edit'
          className='btn'
        />
      </div>
    </form>
  )
}

export default EditBeer;