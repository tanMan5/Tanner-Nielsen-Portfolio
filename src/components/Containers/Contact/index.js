import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './style.css';

function ContactContainer() {
    return (
        <Container>
            <div  class="contact">
            <a href="mailto:tan-ali5@outlook.com" class="email-link">Let's Talk<i class="email"></i></a>
                <br />
                <br />
                <p class="pemail">Email me any time, I'll get back to you as soon as possible!</p>
                <br />
                
            </div>
            <br />
            <br />
            <br />
        </Container>
        
    )
}
export default ContactContainer;