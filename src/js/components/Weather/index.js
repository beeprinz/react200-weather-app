import Weather from './Weather';
import { connect } from 'react-redux';

function mapStoreToProps(store) {
    return {
    //   selectedCity: store.city.cityName,
    //   currentTemp: store.city.currentTemp,
    //   condition: store.city.condition,
    //   humidity: store.city.humidity,
    //   lowTemp: store.city.lowTemp,
    //   highTemp: store.city.highTemp,
    //   windSpeed: store.city.windSpeed,
      city: store.city
    //created an objected city that contains all the above props so we don't 
    //have to pass each one individually
    
    //   history: store.city.history
    };
  }


export default connect(mapStoreToProps)(Weather);