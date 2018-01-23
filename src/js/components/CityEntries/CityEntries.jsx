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
      this.handleCityButton = this.handleCityButton.bind(this);

}
handleCityNameInput(e){
    const { value } = e.target;
    this.setState({ 
        cityName: value
    })
}

handleCitySearch() {
    const { dispatch } = this.props;
    console.log('what is dispatch?', dispatch)
    dispatch(getWeather(this.state.cityName));
}
//string previously in getWeather

handleCityButton(e){
    
    const { dispatch } = this.props;
    const { value } = e.target;
    this.setState({ cityName: value }, function() {
        dispatch(getWeather(this.state.cityName));        
    })    
}



render() {
    return (
    <div>  
        <div className="container"> 
        {/* <div className="btn-group" role="group" aria-label="Basic example">  */}
        <button type="submit" className="btn btn-primary mr-2" value="San Diego" onClick={ this.handleCityButton } >San Diego</button>
        <button type="submit" className="btn btn-primary mr-2" value="San Francisco" onClick={ this.handleCityButton } >San Francisco</button>
        <button type="button" className="btn btn-primary mr-2" value="New York" onClick={ this.handleCityButton }>New York</button>
        <button type="button" className="btn btn-primary mr-2" value="London" onClick={ this.handleCityButton }>London</button>
        <button type="button" className="btn btn-primary mr-2" value="Tokyo" onClick={ this.handleCityButton }>Tokyo</button>
        <button type="button" className="btn btn-primary" value="Dubai" onClick={ this.handleCityButton }>Dubai</button>
        {/* </div> */}
        </div>

        { this.props.error && <div className="alert alert-danger mt-3" role="alert">
        <h4 className="alert-heading">{ this.props.error }</h4></div> }

    <form className="form-inline" onSubmit={e => e.preventDefault() }>
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
        <button type="submit" onClick={this.handleCitySearch} className="btn btn-primary my-4">
          Find Weather!
        </button>
      </form>
      </div>
    );
}
}