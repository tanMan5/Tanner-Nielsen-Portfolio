import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from '../../img/Nielsen.jpg';
import Card from 'react-bootstrap/Card';
import "./style.css";

function HomeContainer() {
    return (
        <Container>

            <div className="banner-text">
            <Row className="justify-content-md-center">
                <h1>Full Stack Developer</h1>
            </Row>
                <hr />
                <Row className="justify-content-md-center">
                <Card.Img src={Image} alt="Tanner Nielsen" style={{ borderRadius: 60, width: 250, height: 300}} />
                
                <p>Front-end web developer with newly developed skills in HTML, CSS, JavaScript, and responsive web design. I recently earned a Certificate in Full Stack Web Development through the University of Arizona. I am a creative, confident, self-motivated person who is also a team player. With each project, I focus on creating an impactful and memorable user experience. I am ecstatic to expand my knowledge and refine my skills as part of joining a quality-driven team to build a better web experience.</p>
                
            </Row>
                
                <p>
                    HTML/CSS | JavaScript/Jquery | Bootstrap | React | NodeJS | Express | SQL | MongoDB
                </p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/tanernielsen/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                    <a href="https://github.com/tanMan5" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </Container>
    )
}
export default HomeContainer;