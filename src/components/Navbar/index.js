import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import './style.css';
import Pdf from '../../Documents/resume.pdf';
import Pdf2 from '../../Documents/Certification.pdf'

class NavTabs extends Component {
    render() {
        return (
            // <Container>
                // <Navbar sticky="top" expand="lg" variant="light" bg="light">
                <div className="global-nav">
                    <Nav className="container navbar justify-content-end flex-column flex-sm-row" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link style={{ color: "rgb(171, 222, 226)" }} href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{ color: "rgb(171, 222, 226)" }} href="/Projects">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{ color: "rgb(171, 222, 226)" }} href="/Contact">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <a  class="resume" href={Pdf} rel="noopener noreferrer" target="_blank">Resume</a>
                        </Nav.Item>/
                        <Nav.Item>
                        <a  class="resume" href={Pdf2} rel="noopener noreferrer" target="_blank">Cert.</a>
                        </Nav.Item>

                    </Nav>
                    </div>
                 // </Navbar> 
            // </Container>
        )
    }
}

export default NavTabs;
