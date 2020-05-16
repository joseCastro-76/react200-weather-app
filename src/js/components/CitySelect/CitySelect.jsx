import React from 'react';

import { updateCity, fetchWeather } from './citySelectActions';

export default class CitySelect extends React.Component {
    constructor(props) {
        super(props);

        this.handleCityInput = this.handleCityInput.bind(this);
        this.handleFetchWeather = this.handleFetchWeather.bind(this);
        this.fetchSanDiego = this.fetchSanDiego.bind(this);
        this.fetchNewYork = this.fetchNewYork.bind(this);
        this.fetchWashingtonDC = this.fetchWashingtonDC.bind(this);
        this.fetchLondon = this.fetchLondon.bind(this);
        this.fetchTokyo = this.fetchTokyo.bind(this);
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(fetchWeather('San Diego'));
    }
    
    handleCityInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateCity(value));
    }

    handleFetchWeather() {
        const { dispatch, currentCity } = this.props;
        dispatch(fetchWeather(currentCity));
    }

    fetchSanDiego() {
        const { dispatch } = this.props;
        dispatch(fetchWeather('San Diego'));
    }

    fetchNewYork() {
        const { dispatch } = this.props;
        dispatch(fetchWeather('New York'));
    }

    fetchWashingtonDC() {
        const { dispatch } = this.props;
        dispatch(fetchWeather('Washington D.C.'));
    }

    fetchLondon() {
        const { dispatch } = this.props;
        dispatch(fetchWeather('London'));
    }

    fetchTokyo() {
        const { dispatch } = this.props;
        dispatch(fetchWeather('Tokyo'));
    }


    render() {
        const { currentCity } = this.props;
        return (
            <div className="mb-4">
                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={ this.fetchSanDiego }
                    >San Diego</button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={ this.fetchNewYork }
                    >New York</button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={ this.fetchWashingtonDC }
                    >Wahington D.C.</button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={ this.fetchLondon }
                    >London</button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={ this.fetchTokyo }
                    >Tokyo</button>
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="city-input"
                        value={ currentCity }
                        onChange={ this.handleCityInput }
                    />
                    <div className="input-group-append">
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={ this.handleFetchWeather }
                        >Go!
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
