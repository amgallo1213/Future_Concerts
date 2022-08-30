import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter
} from 'mdb-react-ui-kit';

const SearchResults = (props) => {
    return (
        <div>


            {props.responseObj.cod === 200 ?
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

            <MDBCard alignment='center' class="searchResults">
                <MDBCardHeader>CITY</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>Special title treatment</MDBCardTitle>
                    <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>


        </div>
    );
}

export default SearchResults;