import React, { Component } from 'react';

import {getWeatherForCity} from './services'

import './App.css';

import { Card } from './components'
import { CityInfo, Wind, CurrentWeather } from './modules/weather'

// TODO - Remove this once done with the UI
const weather_data = {
  "location": {
      "woeid": 55925139,
      "city": "Pune",
      "region": " MH",
      "country": "India",
      "lat": 18.49309,
      "long": 73.79702,
      "timezone_id": "Asia/Kolkata"
  },
  "current_observation": {
      "wind": {
          "chill": 79,
          "direction": 270,
          "speed": 6.21
      },
      "atmosphere": {
          "humidity": 57,
          "visibility": 10,
          "pressure": 27.67,
          "rising": 0
      },
      "astronomy": {
          "sunrise": "6:21 am",
          "sunset": "6:51 pm"
      },
      "condition": {
          "text": "Clear",
          "code": 31,
          "temperature": 79
      },
      "pubDate": 1554912000
  },
  "forecasts": [
      {
          "day": "Wed",
          "date": 1554834600,
          "low": 69,
          "high": 101,
          "text": "Sunny",
          "code": 32
      },
      {
          "day": "Thu",
          "date": 1554921000,
          "low": 71,
          "high": 101,
          "text": "Sunny",
          "code": 32
      },
      {
          "day": "Fri",
          "date": 1555007400,
          "low": 73,
          "high": 101,
          "text": "Sunny",
          "code": 32
      },
      {
          "day": "Sat",
          "date": 1555093800,
          "low": 74,
          "high": 103,
          "text": "Sunny",
          "code": 32
      },
      {
          "day": "Sun",
          "date": 1555180200,
          "low": 76,
          "high": 103,
          "text": "Mostly Sunny",
          "code": 34
      },
      {
          "day": "Mon",
          "date": 1555266600,
          "low": 76,
          "high": 100,
          "text": "Partly Cloudy",
          "code": 30
      },
      {
          "day": "Tue",
          "date": 1555353000,
          "low": 74,
          "high": 92,
          "text": "Sunny",
          "code": 32
      },
      {
          "day": "Wed",
          "date": 1555439400,
          "low": 71,
          "high": 94,
          "text": "Sunny",
          "code": 32
      },
      {
          "day": "Thu",
          "date": 1555525800,
          "low": 67,
          "high": 96,
          "text": "Sunny",
          "code": 32
      },
      {
          "day": "Fri",
          "date": 1555612200,
          "low": 70,
          "high": 99,
          "text": "Sunny",
          "code": 32
      }
  ]
}

class App extends Component {
  componentDidMount () {
    // this.fetchWeather()
  }

  fetchWeather = async () => {
    const lat = 18.491196888942024
    const lon = 73.7923624709481

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
        <CityInfo info={weather_data.location} />
        <CurrentWeather weather={weather_data.current_observation.condition} />

        <Card>
          <div>
            <div className='title'>Forecast</div>
            <div>A</div>
          </div>
        </Card>

        <Wind data={weather_data.current_observation.wind} />
      </div>
    );
  }
}

export default App;
