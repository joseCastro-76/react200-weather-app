import React from 'react';

import Header from './components/Header';
import CitySelect from './components/CitySelect';
import CityInfo from './components/CityInfo';
import SearchHistory from './components/SeacrhHistory';

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