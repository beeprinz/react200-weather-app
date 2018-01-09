import React from 'react';

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


render() {
    // These values were provided by connect()
    // const { description, amount, lineItems } = this.props;
    return (

        <form className="form-inline">
        <div className="form-group mx-sm-3 my-4">
          <input type="text" className="form-control" id="inputPassword2" placeholder="City Name" />
        </div>
        <button type="submit" className="btn btn-primary my-4">
          Find Weather!
        </button>
      </form>

    );
}
}