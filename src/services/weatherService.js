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

  const auth_header = getAuthToken({lat, lon})

  let headers = new Headers();
  headers.set('Authorization', auth_header);

  console.log('auth_header', auth_header)

  return fetch(url, {headers}).then((res) => res.json())
}

export {getWeatherForCity}
