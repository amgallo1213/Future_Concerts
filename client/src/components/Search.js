import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from '@reach/router';
import {
    MDBCard, MDBCardTitle, MDBCardBody,
    MDBCardImage, MDBCardText, MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';
import "../App.css";
import SearchResults from './SearchResults';
import NavBar from './NavBar';




const ConcertSearch = () => {
    let [bandName, setBandName] = useState("");

    // const options = {
    //     method: 'GET',
    //     url: 'https://concerts-artists-events-tracker.p.rapidapi.com/artist',
    //     params: { name: 'Ed sheeran', page: '1' },
    //     headers: {
    //         'X-RapidAPI-Key': process.env.CONCERT_API_KEY,
    //         'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
    //     },

    //     axios.request(options).then(function (response) {
    //         console.log(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     })
    // };


    let [responseObj, setRepsonseObj] = useState({});


    return (
        <div>
            <NavBar />

            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle>Search for Concerts</MDBCardTitle>
                    <MDBCardText>

                        <form>
                            <MDBInput label='Band Name' id='search' class="search" type='text' size="sm" value={bandName}
                                onChange={(e) => setBandName(e.target.value)} />
                            <MDBBtn outline rounded className='mx-2' color='dark' id="searchBTN" type="submit">Search</MDBBtn>
                        </form>

                    </MDBCardText>
                    {/* <MDBBtn>Button</MDBBtn> */}
                </MDBCardBody>
            </MDBCard>





            // <div id="results">
            //     <h3>Results for *BandName*</h3>
            //     <SearchResults responseObj={responseObj} />
            // </div>


        </div>
    );
}

export default ConcertSearch;



{/* <MDBCardImage src='https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uY2VydCUyMHN0YWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='...' fluid /> */ }



















