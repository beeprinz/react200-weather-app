const defaultState = {
    description: '',
    amount: '',
    lineItems: []
  };
  
  export default function CityReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_CITY_NAME' : {
            return {
                ...state,
                description: payload.description
            };
        }

        //weather data from axios call
    case 'ADD_CITY': {
        const { description } = action.payload;
        return {
            description: '',
            lineItems:[
                ...state.lineItems,
                { description }
            ]
        };
    }
    default: {
        return state;
      }
}
}
  