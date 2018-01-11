import Weather from './Weather';
import { connect } from 'react-redux';

function mapStoreToProps(store) {
    return {
      expenseItems: store.city.lineItems
    };
  }


export default connect(mapStoreToProps)(Weather);