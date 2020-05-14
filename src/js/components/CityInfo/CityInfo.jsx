import React from 'react';

function CityInfo(props) {
    return (
        <div className="card">
            <div className="card-header">
                City Information
            </div>
            <div className="card-body text-center">
                <div className="container-fluid">
                    <h1 className="display-4">San Diego</h1>
                    <p className="lead">Lat/Long: 35.69, 139.69</p>
                    <hr />
                </div>
                <div className="container-fluid mt-5 mb-3">
                    <div className="row mb-3">
                        <div className="col">
                            <p className="h5">Temperature(F)</p>
                            <p className="h3 text-success">65.62F</p>
                        </div>
                        <div className="col">
                            <p className="h5">Pressure</p>
                            <p className="h3 text-success">997</p>
                        </div>
                        <div className="col">
                            <p className="h5">Humidity</p>
                            <p className="h3 text-success">39%</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="h5">Lowest Temp(F)</p>
                            <p className="h3 text-success">62.01F</p>
                        </div>
                        <div className="col">
                            <p className="h5">Highest Temp (F)</p>
                            <p className="h3 text-success">71.01F</p>
                        </div>
                        <div className="col">
                            <p className="h5">Wind Speed</p>
                            <p className="h3 text-success">24.16mph</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CityInfo;