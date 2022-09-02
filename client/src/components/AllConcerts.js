import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { MDBTable, MDBTableHead, MDBTableBody,
    MDBBtn } from 'mdb-react-ui-kit';
import "../App.css";
import NavBar from './NavBar';
// import ConcertSearch from './Search';



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
                setConcertList(concertList.filter((concert)=>concert._id !== id));
                // removeFromDom(res);
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return(
        <div>
            <NavBar />
            <main>
            <section id="intro">
                <div id="right-side">
                    <h1>Future Concerts</h1>
                    <div>
                        <p class="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur voluptates tempore excepturi nihil sequi! Nostrum, deserunt hic omnis rerum iure minima consequuntur alias illum! 
                        </p>
                        <p class="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur voluptates tempore excepturi nihil sequi! Nostrum, deserunt hic omnis rerum iure minima consequuntur alias illum! 
                        </p>
                        <Link to={'/concerts/create'} id="addLink">Add a concert</Link>
                    </div>
                </div>
                <div>
                    <img src="https://skuawk.com/skuawk-photos/music/eszter-biro.jpg" />
                </div>
            </section>
            <section id="results">
                <MDBTable hover className="Table">
                        <MDBTableHead>
                            <tr>
                                <th scope='col' style={{fontSize: "1.8em"}}>Date</th>
                                <th scope='col' style={{fontSize: "1.8em"}}>Band Name</th>
                                <th scope='col' style={{fontSize: "1.8em"}}>Venue</th>
                                <th scope='col' style={{fontSize: "1.8em"}}>Tickets Purchased</th>
                                <th scope='col' style={{fontSize: "1.8em"}}>Cancel Concert</th>
                                <th scope='col' style={{fontSize: "1.8em"}}>After the Concert</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>

                        {
                            concertList.map((concert, index) => (

                            <tr key={index} className="concert">
                                <td className="border-end">{concert.date}</td>
                                <td className="border-end" ><Link to={`/concerts/${concert._id}`} style={{color: '#4cc9f0'}}>{concert.bandName}</Link></td>
                                <td className="border-end">{concert.venue}</td>
                                <td className="border-end">{concert.ticketsPurchased}</td>
                                <td className="border-end"><MDBBtn color="link" onClick={()=>{deleteConcert(concert._id)}}>cancel concert</MDBBtn></td>
                                <td><Link to={"/concerts/past-concerts"} style={{color: '#4cc9f0'}}>send to the archives</Link></td>
                                
                            </tr>

                            ))
                        }

                        </MDBTableBody>
                </MDBTable>

            </section>
        
            </main>

        </div>

    )
}

export default AllConcerts;

