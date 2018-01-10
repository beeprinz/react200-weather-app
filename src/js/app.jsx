import React from 'react';
import CityEntries from './components/CityEntries';
import Weather from './components/Weather';
import History from './components/History'

export default class App extends React.Component {
  render() {
    return <div className="container">
        <h1 className="display-3">Cool Weather App!</h1>
        <div className="row">
        <CityEntries />

        </div>
        <div className="row">

          <div className="col-md-6">
          <Weather />
          </div>

          <div className="col-md-6">
          <History />            
          </div>
        </div>
      </div>
  }
}
