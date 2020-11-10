import React, { Component } from 'react';
// import Nav from 'react-bootstrap/Nav';
// import div from 'react-bootstrap/div';
import Container from 'react-bootstrap/Container';
import Image from '../img/signature.png';
import "./style.css"


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Container >
           
                <div>
                    
                  
                    <div className="social-links">
                    <span>
                    <a  href="https://www.linkedin.com/in/tanernielsen/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
                    </a>
                    </span>
                    
                    <a href="https://github.com/tanMan5" rel="noopener noreferrer" target="_blank">
                        <i class="mainFooter" className="fa fa-github fa-3x" aria-hidden="true" />
                    </a>
                    <br />
                    <br />
                    <div className="footerContainer"  className=" flex-column flex-sm-row" activeKey="/home">
                         <img src={Image} />
                   
                </div>
                </div>
          
                </div>
             </Container>
             </footer>
        )
    }
}

export default Footer;