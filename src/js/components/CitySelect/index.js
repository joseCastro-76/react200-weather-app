import { connect } from 'react-redux';

import CitySelect from './CitySelect';

function mapStoreToProps(store) {
    return {
        currentCity: store.city.currentCity,
    };
}

export default connect(mapStoreToProps)(CitySelect);