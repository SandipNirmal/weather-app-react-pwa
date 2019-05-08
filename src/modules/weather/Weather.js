import React, { useState, useEffect } from 'react';
import Typography from 'typography-material';
import { getWeatherForCity } from './../../services';

import {
  CityInfo,
  Wind,
  CurrentWeather,
  Forecasts,
  Astronomy,
  Atmosphere
} from './';
import { Loading } from './../../components';

export const Weather = ({ location: { lat, lon } }) => {
  const [weatherData, setWeatherData] = useState({ weather_data: {} });
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  let fetchInterval = null;

  /**
   * Method to fetch weather Data
   */
  const fetchWeatherData = async (lat, lon) => {
    try {
      const weather = await getWeatherForCity(lat, lon);
      setWeatherData(weatherData => (weatherData.weather_data = weather));

      isError && setError(false);
      !weather.location.city && setError(true);
    } catch (e) {
      console.log('Error', e);
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      fetchWeatherData(lat, lon);
    };

    fetchData();

    // Make Fetch request every 30 minutes
    fetchInterval = setInterval(fetchData, 30 * 60 * 1000);

    return () => {
      clearInterval(fetchInterval);
    };
  }, []);

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <Typography>Error Loading Weather Info.</Typography>
  ) : (
    <div className="App">
      <CityInfo info={weatherData.location || {}} />
      <CurrentWeather
        weather={
          weatherData.current_observation
            ? weatherData.current_observation.condition
            : {}}
      />

      <Forecasts forecasts={weatherData.forecasts || []} />

      <div className="details">
        {weatherData.current_observation &&
          weatherData.current_observation.wind && (
            <Wind data={weatherData.current_observation.wind} />
          )}
        {weatherData.current_observation &&
          weatherData.current_observation.astronomy && (
            <Astronomy data={weatherData.current_observation.astronomy} />
          )}
        {weatherData.current_observation &&
          weatherData.current_observation.atmosphere && (
            <Atmosphere data={weatherData.current_observation.atmosphere} />
          )}
      </div>
    </div>
  );
};
