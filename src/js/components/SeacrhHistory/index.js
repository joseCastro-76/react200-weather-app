import { connect } from 'react-redux';

import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
    return {
        searchHistory: store.city.searchHistory
    }
}

export default connect(mapStoreToProps)(SearchHistory);