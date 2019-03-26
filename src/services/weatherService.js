import * as axios from 'axios';

import {getAuthToken} from './authToken'

/**
 * Fetches the weather information for city based on passed latitude and
 * longitude
 * 
 * @param {number} lat - latitude cordinates for city
 * @param {number} lon - longitude cordinates for city
 */
const getWeatherForCity = (lat, lon) => {
  const params = `lat=${lat}&lon=${lon}`
  const url = `${process.env.REACT_APP_YAHOO_WEATHER_API_ENDPOINT}?${params}&format=json`;
  axios.headers[''] = getAuthToken({lat, lon})
  
  return axios.get(url)

  // return {
  //   data: 'city weather info'
  // }
}

export {
  getWeatherForCity
}
