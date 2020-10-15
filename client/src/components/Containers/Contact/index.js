import React from 'react';
import Container from 'react-bootstrap/Container';

function ContactContainer() {
    return (
        <Container flued>
            <div class="contact">
                <h1>Let's get in touch!</h1>
                <br />
                <p>Email me any time, I'll get back to you as soon as possible!</p>
                <br />
                <a href="mailto:tan-ali5@outlook.com" class="email-link">Let's Talk<i class="email"></i></a>
            </div>
        </Container>
    )
}
export default ContactContainer;