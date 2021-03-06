import { connect } from 'react-redux';
import CityEntries from './CityEntries';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
  return {
    cityName: store.city.cityName,
    error: store.city.error
    // currentTemp: store.city.currentTemp,
    // history: store.city.history
  };
}

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(CityEntries);
