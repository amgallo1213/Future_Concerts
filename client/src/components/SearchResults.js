import React from 'react';

const SearchResults = (props) => {
    return (
        <div>


{           props.responseObj.cod === 200 ?
                <div>
                    <div>
                        <h2><strong>{props.responseObj.name}</strong></h2>
                        <h4>It is currently <h3>{Math.round(props.responseObj.main.temp)} &#176;</h3> with {props.responseObj.weather[0].description}.</h4>
                    </div>
                    <div className="HighLow">
                        <p><strong>High: {Math.round(props.responseObj.main.temp_max)}&#176;</strong></p>
                        <p><strong>Low: {Math.floor(props.responseObj.main.temp_min)}&#176;</strong></p>
                        <p><strong>Humidity: {Math.round(props.responseObj.main.humidity)}%</strong></p>
                    </div>
                </div>
                : null
            }   




        </div>
    );
}

export default SearchResults;