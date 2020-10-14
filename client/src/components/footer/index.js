import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


class Footer extends Component {
    render() {
        return (
            <Container>
                <Navbar sticky="bottom" expand="lg" variant="light" bg="light">
                    <Nav className="container navbar justify-content-end flex-column flex-sm-row" activeKey="/home">
                        Made by


                    </Nav>
                </Navbar>
            </Container>
        )
    }
}

export default Footer;