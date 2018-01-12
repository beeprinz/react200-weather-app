import React from 'react';
import axios from "axios";

// We'll need to import all those action creators.
import {
    getWeather
} from './cityActions';

export default class CityEntries extends React.Component {
    constructor(props) {
      super(props);
    this.state = {
        cityName:""
    }
      this.handleCityNameInput = this.handleCityNameInput.bind(this);
      this.handleCitySearch = this.handleCitySearch.bind(this);

}
handleCityNameInput(e){
    const { value } = e.target;
    this.setState({ 
        cityName: value
    })
}

handleCitySearch() {
    const { dispatch } = this.props;
    dispatch(getWeather(this.state.cityName));
}
//string previously in getWeather


render() {
    // These values were provided by connect()
    // const { description, request, lineItems } = this.props;
    return <form className="form-inline" onSubmit={e => e.preventDefault() }>
        <div className="form-group mx-sm-3 my-4">
          <input 
          type="text" 
          className="form-control" 
          id="cityName" 
          placeholder="City Name" 
          value={this.state.cityName} 
          onChange= { this.handleCityNameInput }
          />
        </div>
        <button type="submit" onClick={this.handleCitySearch} className="btn btn-outline-info my-4">
          Find Weather!
        </button>
      </form>;
      // </div>
}
}