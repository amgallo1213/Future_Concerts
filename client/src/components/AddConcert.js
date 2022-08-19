import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBInput, MDBCardTitle, MDBBtn } from 'mdb-react-ui-kit';
// import NavBar from './NavBar';

const AddConcert = (props) => {
    const [bandName, setBandName] = useState("");
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState("");
    const [ticketsPurchased, setTicketsPurchased] = useState("");
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/concerts/create", {
        bandName, venue, date, ticketsPurchased
    })
    .then((res) => {
        console.log(res.data);
        navigate("/home")
    })
    .catch((err) => {
        console.log(err);
        console.log("err.response:", err.response);
        console.log("err.response.data:", err.response.data);
        console.log("err.response.data.errors:", err.response.data.errors);
        setErrors(err.response.data.errors);
    });
};

return(
    <div className="App">
        <MDBCard id="add-concert-card">
            <MDBCardImage src='https://skuawk.com/skuawk-photos/music/eszter-biro.jpg' position='top' alt='...' id="form-img"/>
            <MDBCardBody>
                <MDBCardTitle>Add a Concert</MDBCardTitle>
                <MDBCardText>
                <form onSubmit={onSubmitHandler} >
                            <div className="Form">
                                <div className="Left">
                                    <div className="Input">
                                        <MDBInput label='Band Name' value={bandName} id='form1' type='text' size="lg" style={{color: '#f72585'}} onChange= {(e) =>setBandName(e.target.value)} />
                                        {errors.bandName?.message}
                                    </div>
                                    <div className="Input">
                                        <MDBInput label='Venue Name' value={venue} id='form1' type='text' size="lg" style={{color: '#f72585'}} onChange= {(e) =>setVenue(e.target.value)} />
                                        {errors.venue?.message}
                                    </div>
                                    <div className="Input">
                                        <MDBInput label='Concert Date' value={date} id='form1' type='date' size="lg" style={{color: '#f72585'}} onChange= {(e) =>setDate(e.target.value)} /> 
                                        {errors.date?.message}
                                    </div>   
                                </div>
                                <div className="Right">
                                    <div className="Input">
                                        <MDBInput label='Tickets Purchased' value={ticketsPurchased} id='form1' type='text' size="lg" style={{color: '#f72585'}} onChange= {(e) =>setTicketsPurchased(e.target.value)} /> 
                                        {errors.ticketsPurchased?.message}
                                    </div>
                                    <div>
                                        <button className="btn btn-outline-light btn-lg " >Add to List</button>
                                    </div>
                                </div>
                            </div>
                        </form> 
                </MDBCardText>
                <MDBBtn type="submit">Add to List</MDBBtn>
                <p><Link to={"/home"} class="Home-Link">back to home</Link></p>
            </MDBCardBody>
            </MDBCard>
    </div>
)

}

export default AddConcert;


