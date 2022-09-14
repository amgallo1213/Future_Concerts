import React from 'react';
import "../App.css";
import Nav from 'react-bootstrap/Nav';





const NavBar = () => {


    return (
        <div>
            <div id="navDiv">
                <a href="/home"><h2 id="navH2">Future Concerts</h2></a>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/concerts/create">Add</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Previous</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Search</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" >Photos</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

        </div>



        // <MDBNavbar expand='lg' light bgColor='light'>
        //     <MDBContainer fluid>
        //         <MDBNavbarBrand href='#' style={{color: '#f72585'}} id="title" >Future Concerts</MDBNavbarBrand>
        //         <MDBNavbarToggler
        //             type='button'
        //             aria-expanded='false'
        //             aria-label='Toggle navigation'
        //             onClick={() => setShowNav(!showNav)}
        //         >
        //             {/* <MDBIcon icon='bars' fas /> */}
        //         </MDBNavbarToggler>
        //         <MDBCollapse navbar show={showNav}>
        //             <MDBNavbarNav>
        //                 <MDBNavbarItem className="NavBarNav">
        //                     <MDBNavbarLink active aria-current='page' href='/home'>
        //                         Home
        //                     </MDBNavbarLink>
        //                 </MDBNavbarItem>
        //                 <MDBNavbarItem className="NavBarNav">
        //                     <MDBNavbarLink href='/concerts/create'>Add</MDBNavbarLink>
        //                 </MDBNavbarItem>
        //                 <MDBNavbarItem className="NavBarNav">
        //                     <MDBNavbarLink href='/concerts/previous'>Previous</MDBNavbarLink>
        //                 </MDBNavbarItem>
        //                 <MDBNavbarItem className="NavBarNav">
        //                     <MDBNavbarLink href='/concerts/search' tabIndex={-1} >
        //                         Search for Concerts
        //                     </MDBNavbarLink>
        //                 </MDBNavbarItem>
        //                 <MDBNavbarItem className="NavBarNav">
        //                     <MDBNavbarLink href='/concerts/photos' tabIndex={-1} >
        //                         My Photos
        //                     </MDBNavbarLink>
        //                 </MDBNavbarItem>
        //             </MDBNavbarNav>
        //         </MDBCollapse>
        //     </MDBContainer>
        // </MDBNavbar>
    );
}

export default NavBar;



