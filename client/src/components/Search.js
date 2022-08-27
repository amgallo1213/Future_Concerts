import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import {
    MDBTable, MDBTableHead, MDBTableBody,
    MDBCard, MDBCardTitle, MDBCardBody, MDBCardImage, MDBCardText, MDBInput, MDBBtn, MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import "../App.css";




const ConcertSearch = () => {
    let [bandName, setBandName] = useState("");

    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://concerts-artists-events-tracker.p.rapidapi.com/artist',
        params: { name: bandName, page: '1' },
        headers: {
            'X-RapidAPI-Key': 'a83b53ed70msh4d41dfa2e523790p142a1bjsn2188d6ba577e',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });



    return (
        <div>

            

            <h3>Search for concerts</h3>
            <MDBInput label='Band Name' id='search' type='text' size="sm" />
            <MDBBtn outline rounded className='mx-2' color='dark' id="searchBTN">Search</MDBBtn>




        </div>
    );
}

export default ConcertSearch;



{/* <MDBCardImage src='https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uY2VydCUyMHN0YWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='...' fluid /> */ }



















