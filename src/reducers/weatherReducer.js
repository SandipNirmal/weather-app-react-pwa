import {WEATHER_INFO_PENDING, WEATHER_INFO_FULFILLED, WEATHER_INFO_REJECTED} from './../actions'

const initialState = {
  cities: [],
  loading: false,
  error: false
}

export const WeatherReducer = (state = initialState, action) => {

  switch (action.type) {

    case WEATHER_INFO_PENDING:
      return {
        ...state,
        loading: true
      }

    case WEATHER_INFO_FULFILLED:
      return {
        ...state,
        data: action.payload.response,
        loading: false
      }

    case WEATHER_INFO_REJECTED:
      return {
        ...state,
        loading: false,
        error: true
      }

    default:
      return state
  }
}