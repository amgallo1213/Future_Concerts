import React, { useState, useEffect } from 'React';
import axios from 'axios';
import { navigate, Link } from '@reach/router';


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
    }


}