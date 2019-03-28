import * as axios from 'axios';

/**
 * Fetches city info from geoDB using city name
 * 
 * @param {string} name
 * 
 * @returns {function | Promise}
 */
const getCityInfo = (name) => {
  return axios.get(`${process.env.REACT_APP_GEO_DB_ENDPOINT}?namePrefix=${name}`)
}

export {
  getCityInfo
}