const defaultState = {
    currentCity: '',
    ifFullfilled: false,
    isRejected: false,
    error: {},
    currentCityInformation: {
        name: 'No Where',
        coord: { lon: 10, lat: 10 },
        temp: 10,
        temp_min: 10,
        temp_max: 100,
        pressure: 1000,
        humidity: 10,
        windSpeed: 10
    },
    searchHistory: []
};

export default function citySelectReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_CITY': {
            return {
                ...state,
                currentCity: payload.city
            };
        }

        case 'FETCH_WEATHER_PENDING': {
            return state;
        }

        case 'FETCH_WEATHER_FULFILLED': {
            const name = payload.name;
            const coord = payload.coord;
            const temp = payload.main.temp;
            const temp_min = payload.main.temp_min;
            const temp_max = payload.main.temp_max;
            const pressure = payload.main.pressure;
            const humidity = payload.main.humidity;
            const windSpeed = payload.wind.speed
            const d = new Date();
            const date = d.toLocaleDateString();

            return {
                ...state,
                isFullfilled: true,
                currentCityInformation: {
                    name, coord, temp, temp_min, temp_max,
                    pressure, humidity, windSpeed
                },
                searchHistory: [
                    ...state.searchHistory,
                    { name, date }
                ]
            }
        }

        case 'FETCH_WEATHER_REJECTED': {
            return {
                isRejected: true,
                error: payload
            }
        }

        default: {
            return state;
        }
    }
}