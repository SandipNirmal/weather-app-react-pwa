import {CITY_INFO_PENDING, CITY_INFO_FULFILLED, CITY_INFO_REJECTED} from './../actions'

const initialState = {
  cities: [],
  loading: false,
  error: false
}

export const CITYReducer = (state = initialState, action) => {

  switch (action.type) {

    case CITY_INFO_PENDING:
      return {
        ...state,
        loading: true
      }

    case CITY_INFO_FULFILLED:
      return {
        ...state,
        data: action.payload.response,
        loading: false
      }

    case CITY_INFO_REJECTED:
      return {
        ...state,
        loading: false,
        error: true
      }

    default:
      return state
  }
}