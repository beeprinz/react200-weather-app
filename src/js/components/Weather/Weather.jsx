import React from 'react';


export default class Weather extends React.Component {


render() {
    // These values were provided by connect()
    const { description, amount, lineItems } = this.props;
    return (

      <div className="card border-info">
              <h5 className="card-header bg-info text-white">
                City Information
              </h5>
              <div className="card-body">
                <h3 className="card-title text-center">San Diego</h3>
                <p className="text-center">weather icon</p>
                <div className="container">
                <div className="row">
                <div className="col-md-4">
                <p className="text-center font-weight-bold">Temperature</p>
                <p className="text-center">69F</p>
                </div>
                <div className="col-md-4">
                <p className="text-center font-weight-bold">Pressure</p>
                <p className="text-center">HIGH</p>
                </div>
                <div className="col-md-4">
                <p className="text-center font-weight-bold">Humidity</p>
                <p className="text-center">95%</p>
                </div>
                </div>

                <div className="row">
                <div className="col-md-4">
                <p className="text-center font-weight-bold">Low (F)</p>
                <p className="text-center">69F</p>
                </div>
                <div className="col-md-4">
                <p className="text-center font-weight-bold">High (F)</p>
                <p className="text-center">69</p>
                </div>
                <div className="col-md-4">
                <p className="text-center font-weight-bold">Wind Speed</p>
                <p className="text-center">95 mph</p>
                </div>
                </div>
                </div>
              </div>
            </div>

    );
}
}