import axios from 'axios';

const API_URL = '/api/breweries/';

// Get breweries
const getBreweries = async () => {
  const res = await axios.get(API_URL);
  
  return res.data;
}

// Get brewery
const getBrewery = async (id) => {
  const res = await axios.get(API_URL + id);
  return res.data;
}

// Create brewery
const createBrewery = async (brewery) => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  const res = await axios.post(API_URL, brewery, config);
  if (res.data) {
    return res.data;
  }
}

// Delete brewery
const deleteBrewery = async (id) => {
  if (window.confirm('Are you sure? This CANNOT be undone.')) {
    await axios.delete(API_URL + id);
  }
}

// Add beer
const addBeer = async (data) => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  const { beer, id } = data;

  const res = await axios.put(`${API_URL}${id}/beers`, beer, config);
  if (res.data) {
    return res.data;
  }
}

// Delete beer
const deleteBeer = async (breweryId, beerId) => {
  const res = await axios.delete(`${API_URL}${breweryId}/beers/${beerId}`)
  if (res.data) {
    return res.data
  }
}

// Return object
const breweryService = {
  getBreweries,
  getBrewery,
  createBrewery,
  deleteBrewery,
  addBeer,
  deleteBeer
}

export default breweryService;