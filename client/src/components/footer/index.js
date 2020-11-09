import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./style.css"


class Footer extends Component {
    render() {
        return (
            <Container>
                <Navbar sticky="bottom" expand="lg" variant="light" bg="light">
                    <Nav className="container navbar justify-content flex-column flex-sm-row" activeKey="/home">
                        Made by Tanner Nielsen
                   
                    <div className="social-links">
                    <a href="https://www.linkedin.com/in/tanernielsen/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square fa-7x" aria-hidden="true" />
                    </a>
                    <a href="https://github.com/tanMan5" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github fa-7x" aria-hidden="true" />
                    </a>
                </div>
                </Nav>
          
                </Navbar>
            </Container>
        )
    }
}

export default Footer;