import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { reset } from '../features/auth/authSlice';
import { addBeer } from '../features/brewery/brewerySlice';

function AddBeer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  
  const { user } = useSelector((state) => state.auth);

  const [ formData, setFormData ] = useState({
    name: '',
    type: '',
    abv: '',
    description: '',
    img: ''
  });
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
      id
    }

    dispatch(addBeer(data));
    navigate('/');
  }

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }

    dispatch(reset());
  }, [user, navigate, dispatch])
  return (
    <div className='create-beer'>
      <h1 className='large'>Add Beer</h1>
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
            placeholder='Image'
            name='img'
            value={img}
            onChange={ev => {handleChange(ev)}}
          />
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Description'
            name='description'
            value={description}
            onChange={ev => {handleChange(ev)}}
            rows={5}
          ></textarea>
        </div>
        <div className='form-group'>
          <input
            type='submit'
            value='Add beer!'
            className='btn'
          />
        </div>
      </form>
    </div>
  )
}

export default AddBeer;