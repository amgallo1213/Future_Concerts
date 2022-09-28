import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Button, Form } from 'react-bootstrap';
import "../App.css";
import NavBar from './NavBar';
import Checkbox from './Checkbox';


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


    return (
        <div className="App">
            <NavBar />

            <h2>Add A Concert</h2>
            <div>
                <Form onSubmit={onSubmitHandler}>

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
                        <Checkbox />
                        <Checkbox />
                        {/* <Form.Control type="text" placeholder="Tickets purchased"  id="ticketsPurchased" value={ticketsPurchased} required onChange={(e) => setTicketsPurchased(e.target.value)} /> */}
                    </Form.Group>
                    <Button type="submit" className="addBtn">Add to List</Button>
                </Form>
            </div>
        </div>
    )

}

export default AddConcert;


