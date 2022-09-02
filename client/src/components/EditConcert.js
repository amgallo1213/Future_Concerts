import React, { useState, useEffect } from 'React';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import "../App.css";
import { MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBInput, MDBCardTitle, MDBCheckbox } from 'mdb-react-ui-kit';
import NavBar from './NavBar';

const EditConcert = (props) => {

    const {id} = (props);

    const [bandName, setBandName] = useState("");
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState("");
    const [ticketsPurchased, setTicketsPurchased] = useState("");
    // const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/concerts/${id}`)
            .then((res) => {
                console.log(res.data);
                setBandName(res.data.bandName);
                setVenue(res.data.venue);
                setDate(res.data.date);
                setTicketsPurchased(res.data.ticketsPurchased);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id])

    const editHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/concerts/update/${id}`,
        {
            bandName, venue, date, ticketsPurchased
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/home");
        })
        .catch((err) => {
            console.log(err);
            // setErrors(err.response.data.errors);
        })
    };

    return(
        <div>
            <NavBar />
            <MDBCard id="edit-concert-card">
                <MDBCardImage src='https://skuawk.com/skuawk-photos/music/eszter-biro.jpg' position='top' alt='...' id="form-img"/>
                <MDBCardBody>
                    <MDBCardTitle id="editTitle">Edit Concert</MDBCardTitle>
                    <MDBCardText>
                    <form onSubmit={editHandler} >
                                <div className="Form">
                                    <div className="Left">
                                        <div className="Input">
                                            <MDBInput label='Band Name' value={bandName} id='form1' type='text' size="lg" style={{color: '#f72585'}} onChange= {(e) =>setBandName(e.target.value)} />
                                            {/* {errors.bandName?.message} */}
                                        </div>
                                        <div className="Input">
                                            <MDBInput label='Venue Name' value={venue} id='form1' type='text' size="lg" style={{color: '#f72585'}} onChange= {(e) =>setVenue(e.target.value)} />
                                            {/* {errors.venue?.message} */}
                                        </div>
                                        <div className="Input">
                                            <MDBInput label='Concert Date' value={date} id='form1' type='date' size="lg" style={{color: '#f72585'}} onChange= {(e) =>setDate(e.target.value)} /> 
                                            {/* {errors.date?.message} */}
                                        </div>   
                                    </div>
                                    <div className="Right">
                                        <div>
                                            <MDBCheckbox name='inlineCheck' id='inlineCheckbox1' value='option1' label='Yes' inline />
                                            <MDBCheckbox name='inlineCheck' id='inlineCheckbox2' value='option2' label='No' inline />
                                        </div>
                                        <div className="Input">
                                            <MDBInput label='Tickets Purchased' value={ticketsPurchased} id='form1' type='text' size="lg" style={{color: '#f72585'}} onChange= {(e) =>setTicketsPurchased(e.target.value)} /> 
                                            {/* {errors.ticketsPurchased?.message} */}
                                        </div>
                                        <div>
                                            <button className="btn btn-outline-dark btn-lg " type="submit">Add to List</button>
                                        </div>
                                    </div>
                                </div>
                            </form> 
                    </MDBCardText>
                    <p><Link to={"/home"} class="homeLink">back to home</Link></p>
                </MDBCardBody>
                </MDBCard>


        </div>
    )


}

export default EditConcert;