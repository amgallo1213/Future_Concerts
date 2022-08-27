import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { MDBTable, MDBTableHead, MDBTableBody,
    MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import "../App.css";







const ConcertSearch = () => {

    return ( 
        <div>

            <MDBCard id="search-card">
                <MDBCardImage src='https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uY2VydCUyMHN0YWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='...' position='top' />
                <MDBCardBody>
                    <MDBCardText style={{fontSize: "2.75em"}}>
                        Search for Concerts
                        <MDBInput label='Band Name' id='search' type='text' size="sm" />
                        <MDBBtn outline rounded className='mx-2' color='dark'>Search</MDBBtn>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>


        </div>
     );
}
 
export default ConcertSearch;




















                