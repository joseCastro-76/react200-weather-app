const defaultState = {
    currentCity: 'San Diego',
    ifFullfilled: false,
    isRejected: false,
    error: {},
    currentCityInformation: {},
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
            return;
        }

        case 'FETCH_WEATHER_FULLFILLED': {
            return {
                ...state,
                isFullfilled: true,
                currentCityInformation: payload
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