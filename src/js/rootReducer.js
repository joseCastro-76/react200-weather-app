import { combineReducers } from 'redux';

import citySelectReducer from './components/CitySelect/citySelectReducer'

const rootReducer = combineReducers({
    city: citySelectReducer
});

export default rootReducer;
