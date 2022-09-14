import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Button, Card } from 'react-bootstrap';
import "../App.css";
import NavBar from './NavBar';



const OneConcert = (props) => {
    const { id, removeFromDom } = props;
    const [concertList, setConcertList] = useState("");
    const [oneConcert, setOneConcert] = useState([]);
    console.log("OneConcert");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/concerts/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setOneConcert(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    const deleteConcert = (id) => {
        axios.delete(`http://localhost:8000/api/concerts/${id}`)
            .then(res => {
                setConcertList(concertList.filter((concert) => concert._id !== id));
                navigate("/home");
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            <NavBar />
            <div id="oneConcertPage">
                <h2 id="oneConcertPageH2">{oneConcert.bandName}</h2>
                <Card id="oneConcertCard" >
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title id="oneConcertCardTitle">Concert Date: {oneConcert.date} </Card.Title>
                        <Card.Text className="oneConcertCardText">
                            Tickets Purchased: {oneConcert.ticketsPurchased} 
                        </Card.Text>
                        <Card.Text className="oneConcertCardText">
                            Location: {oneConcert.venue}
                        </Card.Text>
                        <Button type="submit" onClick={(e) => { deleteConcert(oneConcert._id) }} className="cancelBtn">Cancel concert</Button>
                        <div>
                            <Link to="/concerts/update/:id" id="editLink">Edit Concert Info</Link>
                        </div>
                    </Card.Body>
                </Card>
                <div id="concertInfo">
                    <div>
                        
                        <p></p>
                    </div>
                    <div>
                        <p></p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default OneConcert;