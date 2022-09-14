import React, { useState, useEffect } from 'React';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import "../App.css";
import { Button, Form } from 'react-bootstrap';
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
                <h2>Edit Concert</h2>
                <Form onSubmit={editHandler}>

                    <Form.Group className="mb-3" >
                        <Form.Label>Band Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter band name"  id="bandName" value={bandName} required onChange={(e) => setBandName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Venue</Form.Label>
                        <Form.Control type="text" placeholder="Enter venue"  id="venue" value={venue} required onChange={(e) => setVenue(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Concert Date</Form.Label>
                        <Form.Control type="date"  id="date" value={date} required onChange={(e) => setDate(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Tickets Purchased</Form.Label>
                        <Form.Control type="text" placeholder="Tickets purchased"  id="ticketsPurchased" value={ticketsPurchased} required onChange={(e) => setTicketsPurchased(e.target.value)} />
                    </Form.Group>

                    <Button type="submit" className="addBtn">Add to List</Button>
                    
            </Form>


        </div>
    )


}

export default EditConcert;