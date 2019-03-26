import * as axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_YAHOO_WEATHER_API_ENDPOINT;
axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * Fetches the weather information for city based on passed latitude and
 * longitude
 * 
 * @param {number} lat - latitude cordinates for city
 * @param {number} lon - longitude cordinates for city
 */
const getWeatherForCity = (lat, lon) => {
  return {
    data: 'city weather info'
  }
}

export {
  getWeatherForCity
}
