import moment from 'moment';

const defaultState = {
    cityName: '',
    error:'',
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
        case 'GET_WEATHER_PENDING' : 
            return {
                ...state,
                error: ''
            }
        case 'GET_WEATHER_FULFILLED' : {
            if(typeof payload === 'undefined') {
                return {
                    ...state,
                    // error: 'city not found, check spelling'
                    error: 'city not found, try again!'
                //     <div className="alert alert-success" role="alert">
                //     <h4 className="alert-heading">Well done!</h4>
                //     <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                //     <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                //   </div>
            
                }
            }
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
                        // date: moment().format('MMMM Do YYYY, h:mm:ss a')
                        dateCalendar: moment().format('L'),
                        dateHour: moment().format('LTS'),
                        
                    }
                ]
            };
        }    //ADD MORE STUFF TO THE ARRAY

        case 'GET_WEATHER_REJECTED' : 
        return {
            ...state,
            error: payload.message
        }
        //message js default error 

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
  