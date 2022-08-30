import React, { useState } from 'react';
import "../App.css";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
} from 'mdb-react-ui-kit';



const NavBar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#' style={{color: '#f72585'}} id="title" >Future Concerts</MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNav(!showNav)}
                >
                    {/* <MDBIcon icon='bars' fas /> */}
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNav}>
                    <MDBNavbarNav>
                        <MDBNavbarItem class="NavBarNav">
                            <MDBNavbarLink active aria-current='page' href='/home'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem class="NavBarNav">
                            <MDBNavbarLink href='/concerts/create'>Add</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem class="NavBarNav">
                            <MDBNavbarLink href='/concerts/previous'>Previous</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem class="NavBarNav">
                            <MDBNavbarLink href='/concerts/search' tabIndex={-1} >
                                Search for Concerts
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem class="NavBarNav">
                            <MDBNavbarLink href='/concerts/photos' tabIndex={-1} >
                                My Photos
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default NavBar;



