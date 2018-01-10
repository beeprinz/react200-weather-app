import axios from "axios";

export function updateCityName(description) {
  return {
    type: "UPDATE_CITY_NAME",
    payload: { description }
  };
}

export function getWeather(request) {
  return {
    type: "GET_WEATHER",
    payload: { request }

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

//city data from axios call will go into payload
