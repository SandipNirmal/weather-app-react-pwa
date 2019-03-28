import React, { Component } from 'react';

import './App.css';

import {Card} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        Weather App

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
