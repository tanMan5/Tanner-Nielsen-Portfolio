import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import './style.css';
import Pdf from '../../Documents/resume.pdf';

class NavTabs extends Component {
    render() {
        return (
            // <Container>
                // <Navbar sticky="top" expand="lg" variant="light" bg="light">
                <div className="global-nav">
                    <Nav className="container navbar justify-content-end flex-column flex-sm-row" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link style={{ color: "rgb(175, 229, 233)" }} href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{ color: "rgb(175, 229, 233)" }} href="/Projects">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{ color: "rgb(175, 229, 233)" }} href="/Contact">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <a  class="resume" href={Pdf} rel="noopener noreferrer" target="_blank">Resume</a>
                        </Nav.Item>

                    </Nav>
                    </div>
                 // </Navbar> 
            // </Container>
        )
    }
}

export default NavTabs;
