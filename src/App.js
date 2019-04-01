import React, { Component } from 'react';

import './App.css';

import {Card} from './components'
import CurrentWeather from './modules/weather/CurrentWeather'
import CityInfo from './modules/weather/CityInfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CityInfo />
        <CurrentWeather />

        <Card>
          <div>
            <div className='title'>Forecast</div>
            <div>A</div>
          </div>
        </Card>
      </div>
    );
  }
}

export default App;
