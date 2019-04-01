import { combineReducers } from "redux";

import { WeatherReducer } from './weatherReducer'
import { CityReducer } from './cityReducer'

const rootReducer = combineReducers({
  weather: WeatherReducer,
  city: CityReducer
});

export default rootReducer;
