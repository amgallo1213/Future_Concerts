import React from 'react';
import "../App.css";
import Nav from 'react-bootstrap/Nav';





const NavBar = () => {


    return (
        <div>
            <div id="navDiv">
                <a href="/home" id="navH2"><h2 >Future Concerts</h2></a>
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

    );
}

export default NavBar;



