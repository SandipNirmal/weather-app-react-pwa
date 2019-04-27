import React, { useState, useEffect } from 'react';

import { Typography } from './components'
import { getWeatherForCity } from './services';

import './App.css';

import {
  CityInfo,
  Wind,
  CurrentWeather,
  Forecasts,
  Astronomy,
  Atmosphere
} from './modules/weather';

function App() {
  //TODO: Add state for 
  const [weatherData, setWeatherData] = useState({weather_data: {}});
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  let fetchInterval = null

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const lat = 18.491196888942024;
      const lon = 73.7923624709481;

      try {
        const weather = await getWeatherForCity(lat, lon);
        setWeatherData(weatherData => weatherData.weather_data = weather);

        isError && setError(false)
        !weather.location.city && setError(true)
      } catch (e) {
        console.log('Error', e);
        setError(true)
      }

      setLoading(false)
    };

    fetchData();

    // Make Fetch request every 30 minutes
    fetchInterval = setInterval(fetchData, 30 * 60 * 1000)

    return () => {
      clearInterval(fetchInterval)
    }
  }, []);

  return isLoading
    ? (<Typography>Loading...</Typography>) 
    : isError
      ? (<Typography>Error Loading Weather Info.</Typography>)
      : (
        <div className="App">
          <CityInfo info={weatherData.location || {}} />
          <CurrentWeather
            weather={
              weatherData.current_observation
                ? weatherData.current_observation.condition
                : {}
            }
          />

          <Forecasts forecasts={weatherData.forecasts || []} />

          <div className="details">
            <Wind data={weatherData.current_observation && weatherData.current_observation.wind} />
            <Astronomy data={weatherData.current_observation && weatherData.current_observation.astronomy} />
            <Atmosphere data={weatherData.current_observation && weatherData.current_observation.atmosphere} />
          </div>
        </div>
        );
}

export default App;
