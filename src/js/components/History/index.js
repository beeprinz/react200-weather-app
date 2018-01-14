import History from './History';
import { connect } from 'react-redux';

function mapStoreToProps(store) {
    return {

      history: store.city.history
    //   history: store.city.history
    };
  }


export default connect(mapStoreToProps)(History);
