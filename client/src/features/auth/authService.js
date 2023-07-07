import axios from 'axios';

const API_URL = '/api/auth';

// Login user
const login = async (user) => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }
  const { email, password } = user;
  const body = JSON.stringify({ email, password });
  console.log(`Trying to send to database: ${body}`);

  const res = await axios.post(API_URL, body, config);
  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }
  return res.data;

}

// Logout user
const logout = () => {
  localStorage.removeItem('user');
}

// Return object
const authService = {
  login,
  logout
}

export default authService;