import React, { useState, useEffect } from 'react'

const EditBeerTwo = ({ beerName, beerAbv, beerType, beerDescription, beerImg }) => {
  const [ formData, setFormData ] = useState({
    name: '',
    type: '',
    abv: '',
    description: '',
    img: ''
  });

  useEffect(() => {
    setFormData({
      name: beerName,
      type: beerType,
      description: beerDescription,
      abv: beerAbv,
      img: beerImg
    })
  }, []);

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
    console.log()
  }

  return (
    <form onSubmit={ev => {handleSubmit(ev)}} className='form'>
      <div className='form-group'>
        <input
          type='text'
          placeholder='Name *'
          name='name'
          value={name}
          onChange={ev => {handleChange(ev)}}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          placeholder='Type'
          name='type'
          value={type}
          onChange={ev => {handleChange(ev)}}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          placeholder='Alcohol by Volume'
          name='abv'
          value={abv}
          onChange={ev => {handleChange(ev)}}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          placeholder='Description'
          name='description'
          value={description}
          onChange={ev => {handleChange(ev)}}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          placeholder='Image'
          name='img'
          value={img}
          onChange={ev => {handleChange(ev)}}
        />
      </div>
      <div className='form-group'>
        <input
          type='submit'
          value='Add beer!'
          className='btn'
        />
      </div>
    </form>
  )
}

export default EditBeerTwo
