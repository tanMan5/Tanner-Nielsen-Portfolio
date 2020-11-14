import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from '../../img/Nielsen.jpg';
import Card from 'react-bootstrap/Card';
import "./style.css";

function HomeContainer() {
    return (
        <Container className="homeContainer">

            <div className="banner-text">
            <Row className="justify-content-md-center">
                <h1>Full Stack Developer</h1>
            </Row>
                <hr style={{ borderTopColor: "rgb(171, 222, 226)" }} />
                <Row className="justify-content-md-center">
                <Card.Img src={Image} alt="Tanner Nielsen" style={{ borderRadius: 60, width: 250, height: 275}} />
                
                <p>Front-end web developer with newly developed skills in HTML, CSS, JavaScript, and responsive web design. I recently earned a Certificate in Full Stack Web Development through the University of Arizona. I am a creative, confident, self-motivated person who is also a team player. With each project, I focus on creating an impactful and memorable user experience. I am ecstatic to expand my knowledge and refine my skills as part of joining a quality-driven team to build a better web experience.</p>
                
            </Row>
                
                <p>
                    HTML/CSS | JavaScript/Jquery | Bootstrap | React | NodeJS | Express | SQL | MongoDB
                </p>
              
            </div>
        </Container>
    )
}
export default HomeContainer;