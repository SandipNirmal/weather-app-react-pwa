import React, {Component} from 'react';

import {getWeatherForCity} from './services'

import './App.css';

import {
  CityInfo,
  Wind,
  CurrentWeather,
  Forecasts,
  Astronomy,
  Atmosphere
} from './modules/weather'

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
      "chill": 89,
      "direction": 270,
      "speed": 4.35
    },
    "atmosphere": {
      "humidity": 31,
      "visibility": 10.0,
      "pressure": 27.64,
      "rising": 0
    },
    "astronomy": {
      "sunrise": "6:18 am",
      "sunset": "6:52 pm"
    },
    "condition": {
      "text": "Partly Cloudy",
      "code": 30,
      "temperature": 89
    },
    "pubDate": 1555246800
  },
  "forecasts": [
    {
      "day": "Sun",
      "date": 1555180200,
      "low": 73,
      "high": 101,
      "text": "Partly Cloudy",
      "code": 30
    }, {
      "day": "Mon",
      "date": 1555266600,
      "low": 75,
      "high": 97,
      "text": "Partly Cloudy",
      "code": 30
    }, {
      "day": "Tue",
      "date": 1555353000,
      "low": 74,
      "high": 92,
      "text": "Partly Cloudy",
      "code": 30
    }, {
      "day": "Wed",
      "date": 1555439400,
      "low": 69,
      "high": 94,
      "text": "Sunny",
      "code": 32
    }, {
      "day": "Thu",
      "date": 1555525800,
      "low": 62,
      "high": 94,
      "text": "Sunny",
      "code": 32
    }, {
      "day": "Fri",
      "date": 1555612200,
      "low": 67,
      "high": 98,
      "text": "Sunny",
      "code": 32
    }, {
      "day": "Sat",
      "date": 1555698600,
      "low": 68,
      "high": 94,
      "text": "Sunny",
      "code": 32
    }, {
      "day": "Sun",
      "date": 1555785000,
      "low": 67,
      "high": 96,
      "text": "Sunny",
      "code": 32
    }, {
      "day": "Mon",
      "date": 1555871400,
      "low": 69,
      "high": 98,
      "text": "Sunny",
      "code": 32
    }, {
      "day": "Tue",
      "date": 1555957800,
      "low": 78,
      "high": 101,
      "text": "Sunny",
      "code": 32
    }
  ]
}

class App extends Component {
  componentDidMount() {
    // this.fetchWeather()
  }

  fetchWeather = async() => {
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
        <CityInfo info={weather_data.location || {}}/>
        <CurrentWeather
          weather={weather_data.current_observation
          ? weather_data.current_observation.condition
          : {}}/>
        <Forecasts forecasts={weather_data.forecasts || []}/>

        <div className='details'>
          <Wind data={weather_data.current_observation.wind}/>
          <Astronomy data={weather_data.current_observation.astronomy}/>
          <Atmosphere data={weather_data.current_observation.atmosphere}/>
        </div>
      </div>
    );
  }
}

export default App;
