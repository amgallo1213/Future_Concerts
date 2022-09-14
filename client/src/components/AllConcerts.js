import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Table from 'react-bootstrap/Table';
import "../App.css";
import { Button } from 'react-bootstrap';
import NavBar from './NavBar';
import TrackSearch from './Search';





const AllConcerts = (props) => {
    // const {id, removeFromDom} = props;
    const [concertList, setConcertList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/home")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setConcertList(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteConcert = (id) => {

        axios.delete(`http://localhost:8000/api/concerts/${id}`)
            .then(res => {
                // console.log(res.data);
                setConcertList(concertList.filter((concert) => concert._id !== id));
                // removeFromDom(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <NavBar />
            <main>
                <section id="intro">
                    <div id="right-side">
                        <h1>Future Concerts</h1>
                        <div>
                            <p className="description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur voluptates tempore excepturi nihil sequi! Nostrum, deserunt hic omnis rerum iure minima consequuntur alias illum!
                            </p>
                            <p className="description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur voluptates tempore excepturi nihil sequi! Nostrum, deserunt hic omnis rerum iure minima consequuntur alias illum!
                            </p>
                            {/* <MDBBtn><Link to={'/concerts/create'} id="addBtn">Add a concert</Link></MDBBtn> */}
                            <Button className="addBtn"><a href="/concerts/create" id="addBtnLink">Add Concert</a></Button>
                        </div>
                    </div>
                    <div>
                        <img src="https://skuawk.com/skuawk-photos/music/eszter-biro.jpg" alt="legs on a concert stage with a purple background" />
                    </div>
                </section>
                <section id="results">
                    <Table hover bordered size="sm">
                        <thead>
                            <tr>
                                <th  style={{ fontSize: "1.8em" }}>Date</th>
                                <th  style={{ fontSize: "1.8em" }}>Band Name</th>
                                <th  style={{ fontSize: "1.8em" }}>Venue</th>
                                <th  style={{ fontSize: "1.8em" }}>Tickets Purchased</th>
                                <th  style={{ fontSize: "1.8em" }}>Cancel Concert</th>
                                <th  style={{ fontSize: "1.8em" }}>After the Concert</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                concertList.map((concert, index) => (

                                    <tr key={index} className="concert">
                                        <td >{concert.date}</td>
                                        <td ><Link to={`/concerts/${concert._id}`} style={{ color: '#FF4081' }}>{concert.bandName}</Link></td>
                                        <td >{concert.venue}</td>
                                        <td >{concert.ticketsPurchased}</td>
                                        <td ><Button onClick={() => { deleteConcert(concert._id) }} className="cancelBtn" >cancel</Button></td>
                                        <td><Link to={"/concerts/past-concerts"} style={{ color: '#FF4081' }}>send to the archives</Link></td>

                                    </tr>

                                ))
                            }

                        </tbody>
                    </Table>

                </section>

                <TrackSearch/>
                

            </main>

        </div>

    )
}

export default AllConcerts;

