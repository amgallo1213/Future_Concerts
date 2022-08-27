import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { MDBTable, MDBTableHead, MDBTableBody,
    MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import "../App.css";
import NavBar from './NavBar';



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

                <MDBCard>
                    <MDBCardImage src='https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uY2VydCUyMHN0YWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='...' position='top' />
                    <MDBCardBody>
                        <MDBCardText style={{fontSize: "2.75em"}}>
                            Search for Concerts
                            <MDBInput label='Band Name' id='search' type='text' size="sm" />
                            <MDBBtn outline rounded className='mx-2' color='dark'>Search</MDBBtn>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
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