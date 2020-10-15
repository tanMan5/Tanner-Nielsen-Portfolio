import React from 'react';
import Container from 'react-bootstrap/Container';
function HomeContainer() {
    return (
        <Container fluid>
            <div className="banner-text">
                <h1>Full Stack Developer</h1>
                <hr />
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