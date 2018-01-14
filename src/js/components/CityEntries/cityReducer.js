const defaultState = {
    cityName: '',
    history: [],
    currentTemp: '',
    conditions: '',
    icon: '',
    humidity: '',
    lowTemp: '',
    highTemp: '',
    windSpeed: '',
  };
  
  export default function CityReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_WEATHER_FULFILLED' : {
            return {
                ...state,
                cityName: payload.name,
                currentTemp: payload.main.temp,
                conditions: payload.weather[0].main,
                icon: payload.weather[0].icon,
                humidity: payload.main.humidity,
                lowTemp: payload.main.temp_min,
                highTemp: payload.main.temp_max,
                windSpeed: payload.wind.speed,
                history: [
                    ...state.history,
                    {   cityName: payload.name, 
                        CurrentTemp: payload.main.temp, 
                        conditions: payload.weather[0].main,
                        icon: payload.weather[0].icon,
                        humidity: payload.main.humidity,
                        lowTemp: payload.main.temp_min,
                        highTemp: payload.main.temp_max,
                        windSpeed: payload.wind.speed,
                    }
                ]
            };
        }    //ADD MORE STUFF TO THE ARRAY

        case 'SET_CITY_FROM_HISTORY': {
            return {
                ...state,
                ...payload,
                
            };
        }
    default: {
        return state;
      }
}
}
  