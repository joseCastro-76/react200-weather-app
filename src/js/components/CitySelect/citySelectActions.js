import Axios from 'axios';

export function updateCity(city) {
    return {
        type: 'UPDATE_CITY',
        payload: { city }
    };
}

export function fetchWeather(city) {
    return {
        type: 'FETCH_WEATHER',
        payload: Axios
                    .get('http://localhost:3000/search/' + city)
    }
}

// export function loadWeather(weather) {
//     return {

//     }
// }

// export function updateHistory(){
//     return {

//     }
// }