/**
 * Fetches city info from geoDB using city name
 *
 * @param {string} name
 *
 * @returns {function | Promise}
 */
export const getCityInfo = (name) => {
  const url = `${process.env.REACT_APP_GEO_DB_ENDPOINT}?namePrefix=${name}`
  return fetch(url).then((res) => res.json())
}
