import React from 'react';

import { updateCity, fetchWeather } from './citySelectActions';

export default class CitySelect extends React.Component {
    constructor(props) {
        super(props);

        this.handleCityInput = this.handleCityInput.bind(this);
        this.handleFetchWeather = this.handleFetchWeather.bind(this);
    }
    
    handleCityInput(event) {
        // const { dispatch } = this.props;
        const { value } = event.target;
        console.log(this.props);
        // this.props.dispatch(updateCity(value));
    }

    handleFetchWeather() {
        const { currentCity } = this.props;
        // this.props.dispatch(fetchWeather(currentCity));
    }

    render() {
        const { currentCity } = this.props;
        return (
            <div className="mb-4">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary active">San Diego</button>
                    <button type="button" className="btn btn-primary">New York</button>
                    <button type="button" className="btn btn-primary">Wahington D.C.</button>
                    <button type="button" className="btn btn-primary">London</button>
                    <button type="button" className="btn btn-primary">Tokyo</button>
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
                            onChange={ this.handleFetchWeather }
                        >Go!
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
