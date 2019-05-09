import React, { useState, useEffect } from 'react';
import Typography from 'typography-material'
import { getCurrentLocation } from './services';
import { Loading } from './components';

import './App.css';

import { Weather } from './modules/weather';

function App() {
  const [location, setLocation] = useState({});

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

  return (
    <div>
      <div className='header'>
        <div className='add-city'>
          <Typography onClick={() => alert('Add New City')} variant='button'>Add City</Typography>
        </div>
      </div>

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
