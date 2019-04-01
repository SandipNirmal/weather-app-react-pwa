import { getWeatherForCity } from './../actions'

export const WEATHER_INFO = 'WEATHER_INFO'
export const WEATHER_INFO_PENDING = 'WEATHER_INFO_PENDING'
export const WEATHER_INFO_FULFILLED = 'WEATHER_INFO_FULFILLED'
export const WEATHER_INFO_REJECTED = 'WEATHER_INFO_REJECTED'

export const fetchWeatherInfo = ({lat, lon}) => {
  return dispatch => {
    return dispatch({
      type: WEATHER_INFO,
      payload: getWeatherForCity(lat, lon)
    })
  }
}
