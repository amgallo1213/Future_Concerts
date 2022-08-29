import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { MDBTable, MDBTableHead, MDBTableBody,
    MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBBtn, MDBRow,
    MDBCol } from 'mdb-react-ui-kit';
import "../App.css";
import NavBar from './NavBar';
import ConcertSearch from './Search';



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

            <MDBCard class="card">
                <MDBRow className='g-0'> 
                    <MDBCol md='8'>
                        <MDBCardBody>
                        <MDBCardText className="Tagline" style={{fontSize: "2.75em"}}>My Upcoming Concerts</MDBCardText>
                            
                        
                            <MDBTable hover className="Table">
                                <MDBTableHead>
                                    <tr>
                                        <th scope='col' style={{fontSize: "1.8em"}}>Band Name</th>
                                        <th scope='col' style={{fontSize: "1.8em"}}>Venue</th>
                                        <th scope='col' style={{fontSize: "1.8em"}}>Date</th>
                                        <th scope='col' style={{fontSize: "1.8em"}}>Tickets Purchased</th>
                                        <th scope='col' style={{fontSize: "1.8em"}}>Cancel Concert</th>
                                        <th scope='col' style={{fontSize: "1.8em"}}>After the Concert</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>

                                {
                                    concertList.map((concert, index) => (

                                    <tr key={index} className="concert">
                                        <td className="border-end" ><Link to={`/concerts/${concert._id}`} style={{color: '#4cc9f0'}}>{concert.bandName}</Link></td>
                                        <td className="border-end">{concert.venue}</td>
                                        <td className="border-end">{concert.date}</td>
                                        <td className="border-end">{concert.ticketsPurchased}</td>
                                        <td className="border-end"><MDBBtn color="link" onClick={()=>{deleteConcert(concert._id)}}>cancel concert</MDBBtn></td>
                                        <td><Link to={"/concerts/past-concerts"} style={{color: '#4cc9f0'}}>send to the archives</Link></td>
                                        
                                    </tr>

                                    ))
                                }

                                </MDBTableBody>
                            </MDBTable>
                            <div>
                                <Link to={'/concerts/create'} id="addLink">Add a concert</Link>
                                
                            </div>
                        </MDBCardBody>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBCardImage src='https://skuawk.com/skuawk-photos/music/eszter-biro.jpg' alt='...' fluid />
                        <div id="concertSearch">
                            <ConcertSearch />
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBCard>



{/* 


            <div id="homePage">
                <div id="home-card" className="homeCard">
                    <MDBCard className='mb-3 Card' >
                        <MDBCardImage overlay src='https://skuawk.com/skuawk-photos/music/eszter-biro.jpg' alt='...' />   
                        <MDBCardBody>
                            <MDBCardText className="Tagline" style={{fontSize: "2.75em"}}>My upcoming concerts</MDBCardText>
                            <Link to={'/concerts/create'}>Add a concert</Link>
                            <MDBTable hover className="Table">
                                <MDBTableHead>
                                    <tr>
                                        <th scope='col' style={{fontSize: "1.8em"}}>Band Name</th>
                                        <th scope='col' style={{fontSize: "1.8em"}}>Venue</th>
                                        <th scope='col' style={{fontSize: "1.8em"}}>Date</th>
                                        <th scope='col' style={{fontSize: "1.8em"}}>Tickets Purchased</th>
                                        <th scope='col' style={{fontSize: "1.8em"}}>Cancel Concert</th>
                                        <th scope='col' style={{fontSize: "1.8em"}}>After the Concert</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>

                                {
                                    concertList.map((concert, index) => (

                                    <tr key={index} className="concert">
                                        <td className="border-end" ><Link to={`/concerts/${concert._id}`} style={{color: '#4cc9f0'}}>{concert.bandName}</Link></td>
                                        <td className="border-end">{concert.venue}</td>
                                        <td className="border-end">{concert.date}</td>
                                        <td className="border-end">{concert.ticketsPurchased}</td>
                                        <td className="border-end"><MDBBtn color="link" onClick={()=>{deleteConcert(concert._id)}}>cancel concert</MDBBtn></td>
                                        <td><Link to={"/concerts/past-concerts"} style={{color: '#4cc9f0'}}>send to the archives</Link></td>
                                        
                                    </tr>

                                    ))
                                }

                                </MDBTableBody>
                            </MDBTable>
                        </MDBCardBody>
                    </MDBCard>
                </div> */}

                {/* <div id="concertSearch">
                    <ConcertSearch />
                </div> */}
            </div>
        // </div>
    )
}

export default AllConcerts;









// const AllConcerts = (props) => {
//     const [concertList, setConcertList] = useState([])

//     useEffect(() => {
//         axios.get("http://localhost:8000/api/home")
//             .then((res) => {
//                 console.log(res);
//                 console.log(res.data);
//                 setConcertList(res.data);
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }, [])


//     return(
//         <div>
//             <NavBar />
//             <div>
//                 <table>
//                     <tr>
//                         <th>Band Name</th>
//                         <th>Venue</th>
//                         <th>Date</th>
//                         <th>Need Tickets?</th>
//                         <th>Cancel Concert</th>
//                     </tr>
//                     <tbody>

                    

//                     <tr>
//                         <td>Future Islands</td>
//                         <td>Rome</td>
//                         <td>November 3, 2022</td>
//                         <td>No</td>
//                         <td>No</td>
//                     </tr>


//                     </tbody>

//                 </table>
//             </div>


//         </div>
//     )

// }

// export default AllConcerts;


// {
//     concertList.map((concerts, index) => (

//     <tr key={index} className="concert">
//         <td className="border-end" ><Link to={`/concerts/${concerts._id}`} style={{color: '#4cc9f0'}}>{concerts.bandName}</Link></td>
//         <td className="border-end">{concerts.venue}</td>
//         <td className="border-end">{concerts.date}</td>
//         <td className="border-end">{concerts.ticketsPurchased}</td>
//         {/* <td className="border-end"><button className="btn btn-outline-light btn-sm"  onClick={()=>{deleteConcert(concerts._id)}}>cancel concert</button></td> */}
//         <td><Link to={"/concerts/past-concerts"} style={{color: '#4cc9f0'}}>send to the archives</Link></td>
        
//     </tr>

//     ))
// } 