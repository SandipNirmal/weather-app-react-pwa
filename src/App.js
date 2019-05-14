import React, { useState, useEffect } from 'react';
import Typography from 'typography-material'
import { getCurrentLocation } from './services';
import { Loading } from './components';

import './App.css';

import { Weather } from './modules/weather';
import { AddCity } from './modules/settings'

function App() {
  const [location, setLocation] = useState({});
  const [addNew, setAddNew] = useState(false)

  useEffect(() => {
    const fetchLocation = async () => {
      const { lat, lon } = await getCurrentLocation();
      setLocation({ lat, lon });
    };

    fetchLocation();

    return () => {
      // Clean up here
    };
  }, []);

  const toggleAddCity = () => {
    setAddNew(!addNew)
  }

  return (
    <div>
      <div className='header'>
        <div className='add-city'>
          <Typography onClick={toggleAddCity} variant='button'>Add City</Typography>
        </div>
      </div>

      {addNew ? <AddCity /> : null}

      {location.lat ? (
        <div className="slider">
          <Weather location={location} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
