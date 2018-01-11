import axios from "axios";

export function getWeather(cityName) { 
    //Going to change request into the city name that's going to be passed into 
    //the axios req url to find city. Set everything else up and figure this out later
    console.log({cityName})
  return {
    type: "GET_WEATHER",
    payload:     
    axios
    .get(`/api/${cityName}`)
    .then(r => r.data)
    .catch(err => {
      console.log(err);
    })
    //how to plug in city name at request?

  };
}

export function addCity(description, request) {
  return {
    type: "ADD_CITY",
    payload: { 
        description,
        request
     }
  };
}

