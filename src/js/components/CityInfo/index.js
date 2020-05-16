import { connect } from 'react-redux';

import CityInfo from './CityInfo';

function mapStoreToProps(store) {
    return {
        currCityInfo: store.city.currentCityInformation,
    }
}

export default connect(mapStoreToProps)(CityInfo);