import React, { Component } from 'react';

import {getWeatherForCity} from './services'

import './App.css';

import {Card} from './components'
import CurrentWeather from './modules/weather/CurrentWeather'
import CityInfo from './modules/weather/CityInfo'

class App extends Component {
  componentDidMount () {
    this.fetchWeather()
  }

  fetchWeather = async () => {
    const lat = 18.491192084699236
    const lon = 73.79232377097964

    try {
      const weather = await getWeatherForCity(lat, lon)
      console.log('Weather', weather)
    } catch (e) {
      console.log('Error', e)
    }

  }

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
