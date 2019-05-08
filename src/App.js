import React, { useState, useEffect } from 'react'
import { getCurrentLocation } from './services'
import { Loading } from './components';

import './App.css';

import { Weather } from './modules/weather';

function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const fetchLocation = async () => {
      const {lat, lon} = await getCurrentLocation()
      setLocation({lat, lon})
    };

    fetchLocation()

    return () => {
      // Clean up here
    };
  }, []);

  return location.lat ? <Weather location={location} /> : <Loading />
}

export default App;
