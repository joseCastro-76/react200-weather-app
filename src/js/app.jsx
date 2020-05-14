import React from 'react';

import Header from './components/Header';
import CitySelect from './components/CitySelect/CitySelect';
import CityInfo from './components/CityInfo/CityInfo';
import SearchHistory from './components/SeacrhHistory/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <CitySelect />
        <div className="card-deck">
          <CityInfo />
          <SearchHistory />
        </div>
      </div>
    );
  }
}