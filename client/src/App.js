/*

TODO:
= modernization of redux
= dispatch is null error
= Provider error
= invalid hook call error

*/

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// Components
import Navigation from './components/layout/Navigation';
import Login from './pages/Login';
import Breweries from './pages/Breweries';
import Contact from './pages/Contact';
import About from './pages/About';
import Brewery from './pages/Brewery';
import CreateBrewery from './pages/CreateBrewery';
import EditBrewery from './pages/EditBrewery';
import AddBeer from './pages/AddBeer';
import NotFound from './pages/NotFound';
import Footer from './components/layout/Footer';

// import store from './store';
// import { loadUser } from './actions/auth';
// import setAuthToken from './utils/setAuthToken';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // useEffect(() => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }
  //   store.dispatch(loadUser());
  // }, []);
  
  return (
    <Router>
      <div className="App">
        <Navigation />
          <Routes>
            <Route exact path='/' element={<Breweries />} />
            <Route exact path='/breweries/:id' element={<Brewery />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/new-brewery' element={<CreateBrewery />} />
            <Route exact path='/breweries/:id/edit' element={<EditBrewery />} />
            <Route exact path='/breweries/:id/beers' element={<AddBeer />} />
            <Route element={<NotFound />} />
          </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
