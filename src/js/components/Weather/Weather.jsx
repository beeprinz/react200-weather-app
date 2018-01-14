import React from 'react';


export default class Weather extends React.Component {


render() {
    // These values were provided by connect()
    // const { selectedCity, currentTemp, condition, humidity, lowTemp, highTemp, windSpeed } = this.props;
    const {city} = this.props; 
    console.log('weather props',this.props);
   
    return (

      <div className="card border-info">
              <h5 className="card-header bg-info text-white">
                City Information
              </h5>
              <div className="card-body">
                <h3 className="card-title text-center">{city.cityName}</h3>
                <img className='img-fluid mx-auto d-block' src={ `http://openweathermap.org/img/w/${city.icon}.png` } />
                <div className="container">
                <div className="row">
                <div className="col-md-4">
                <p className="text-center font-weight-bold">Temperature</p>
                <p className="text-center">{city.currentTemp}</p>
                </div>
                <div className="col-md-4">
                <p className="text-center font-weight-bold">Conditions</p>
                <p className="text-center"> {city.conditions} </p>
                </div>
                <div className="col-md-4">
                <p className="text-center font-weight-bold">Humidity %</p>
                <p className="text-center">{city.humidity}</p>
                </div>
                </div>

                <div className="row">
                <div className="col-md-4">
                <p className="text-center font-weight-bold">Low (F)</p>
                <p className="text-center"> { city.lowTemp} </p>
                </div>
                <div className="col-md-4">
                <p className="text-center font-weight-bold">High (F)</p>
                <p className="text-center">{city.highTemp}</p>
                </div>
                <div className="col-md-4">
                <p className="text-center font-weight-bold">Wind Speed</p>
                <p className="text-center">{city.windSpeed}</p>
                </div>
                </div>
                </div>
              </div>
            </div>

    );
  }
}