import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import NavBar from './NavBar';



const OneConcert = (props) => {
    const { id, removeFromDom } = props;
    const [concertList, setConcertList] = useState("");
    const [singleConcert, setSingleConcert] = useState([]);
    console.log("OneConcert");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/concerts/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                singleConcert(res.data);
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
                <p>Band Name: {singleConcert.bandName}</p>
                <p>Venue Name: {singleConcert.venue} </p>
            </div>

        </div>
     );
}
 
export default OneConcert;