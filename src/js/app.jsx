import React from 'react';
import CityEntries from './components/CityEntries';
import WeatherEntries from './components/WeatherEntries';
import History from './components/History'

export default class App extends React.Component {
  render() {
    return <div className="container">
        <h1 className="display-3">Cool Weather App!</h1>
        <CityEntries />

        <div className="row">

          <div className="col-md-6">
          <WeatherEntries />
          </div>

          <div className="col-md-6">
          <History />            
          </div>
        </div>
      </div>
  }
}
