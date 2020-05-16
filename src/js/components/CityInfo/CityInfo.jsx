import React from 'react';

function CityInfo(props) {
    const { currCityInfo } = props;
    const { name, temp, temp_min, temp_max, pressure, humidity, windSpeed } = currCityInfo;
    const { lon, lat } = currCityInfo.coord;

    return (
        <div className="card">
            <div className="card-header">
                City Information
            </div>
            <div className="card-body text-center">
                <div className="container-fluid">
    <h1 className="display-4">{ `${name}` }</h1>
                    <p className="lead">{`Lat/Long: ${lat}, ${lon}`}</p>
                    <hr />
                </div>
                <div className="container-fluid mt-5 mb-3">
                    <div className="row mb-3">
                        <div className="col">
                            <p className="h5">Temperature(F)</p>
                            <p className="h3 text-success">{ `${temp}F` }</p>
                        </div>
                        <div className="col">
                            <p className="h5">Pressure</p>
                            <p className="h3 text-success">{ `${pressure}` }</p>
                        </div>
                        <div className="col">
                            <p className="h5">Humidity</p>
                            <p className="h3 text-success">{ `${humidity}%` }</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="h5">Lowest Temp(F)</p>
                            <p className="h3 text-success">{ `${temp_min}F` }</p>
                        </div>
                        <div className="col">
                            <p className="h5">Highest Temp (F)</p>
                            <p className="h3 text-success">{ `${temp_max}F` }</p>
                        </div>
                        <div className="col">
                            <p className="h5">Wind Speed</p>
                            <p className="h3 text-success">{ `${windSpeed}mph` }</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CityInfo;