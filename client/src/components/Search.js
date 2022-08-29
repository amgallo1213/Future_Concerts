import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from '@reach/router';
import { MDBCard, MDBCardTitle, MDBCardBody, 
    MDBCardImage, MDBCardText, MDBInput, 
    MDBBtn, MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import "../App.css";
import SearchResults from './SearchResults';




const ConcertSearch = () => {
    let [bandName, setBandName] = useState("");

    let [responseObj, setRepsonseObj] = useState({});
    



    return (
        <div>

            <h3>Search for concerts</h3>
            <form>
                <MDBInput label='Band Name' id='search' type='text' size="sm" value={bandName}
                onChange={(e) => setBandName(e.target.value)} />
                <MDBBtn outline rounded className='mx-2' color='dark' id="searchBTN" type="submit">Search</MDBBtn>
            </form>

            <div>
                <SearchResults responseObj={responseObj} />
            </div>


        </div>
    );
}

export default ConcertSearch;



{/* <MDBCardImage src='https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uY2VydCUyMHN0YWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='...' fluid /> */ }



















