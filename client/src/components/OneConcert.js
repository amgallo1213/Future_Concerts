import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
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
                setConcertList(concertList.filter((concert) =>concert._id !== id));
                navigate("/home");
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return ( 
        <div>
            <NavBar/>
            <div>
                <h2>{oneConcert.bandName}</h2>
                <div id="videoSpace"><p>Photo or Video</p></div>
                <div id="concertInfo">
                    <div>
                        <p>Concert Date: {oneConcert.date} </p>
                        <p>Tickets Purchased: {oneConcert.ticketsPurchased} </p>
                    </div>
                    <div>
                        <p>{oneConcert.venue}</p>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default OneConcert;