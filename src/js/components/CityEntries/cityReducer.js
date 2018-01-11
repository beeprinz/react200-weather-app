const defaultState = {
    cityName: '',
    history: []
  };
  
  export default function CityReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        case 'GET_WEATHER_FULFILLED' : {
            return {
                ...state,
                cityName: payload.location.city,
                history:[
                    ...state.history,
                    payload.location.city
                ]
            };
        }    //had to add FULFILLED BECAUSE OF MIDDLEWARE?

        case 'ADD_CITY': {
            const { cityName } = action.payload;
            return {
                ...state,
                cityName: '',
                
            };
        }
    default: {
        return state;
      }
}
}
  