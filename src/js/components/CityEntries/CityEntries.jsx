import React from 'react';
import axios from "axios";

// We'll need to import all those action creators.
import {
//   updateExpenseDescription,
//   updateExpenseAmount,
//   addExpense
} from './cityActions';

export default class CityEntries extends React.Component {
    constructor(props) {
      super(props);
  
      // Here we're binding these methods to the context
      // of the components. This only has to be done,
      // because these methods are called back by
      // event emitters (which lose context).

    //   this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    //   this.handleAmountInput = this.handleAmountInput.bind(this);
    //   this.handleAddExpense = this.handleAddExpense.bind(this);
    }

componentWillMount(){
    axios
    .get("http://api.wunderground.com/api/2d0b2b49f5e95886/forecast/geolookup/conditions/q/CA/San_Francisco.json")
    .then(r => {
      console.log(r.data);
      res.send(r.data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("bad response");
    })
}



render() {
    // These values were provided by connect()
    // const { description, amount, lineItems } = this.props;
    return (

        // <div className="col-9">
        <form className="form-inline">
        <div className="form-group mx-sm-3 my-4">
          <input type="text" className="form-control" id="cityName" placeholder="City Name" />
        </div>
        <button type="submit" className="btn btn-outline-info my-4">
          Find Weather!
        </button>
      </form>
        // </div>

    );
}
}