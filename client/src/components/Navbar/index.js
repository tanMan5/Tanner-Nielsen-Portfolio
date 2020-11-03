import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './style.css';

class NavTabs extends Component {
    render() {
        return (
            <Container>
                <Navbar sticky="top" expand="lg" variant="light" bg="light">
                    <Nav className="container navbar justify-content-end flex-column flex-sm-row" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Projects">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                        </Nav.Item>
                        <a className="resume" href="client\src\components\Documents\resume.pdf" rel="noopener noreferrer" target="_blank">Resume</a>


                    </Nav>
                </Navbar>
            </Container>
        )
    }
}

export default NavTabs;
