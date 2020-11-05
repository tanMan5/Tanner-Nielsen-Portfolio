import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns'
import Image from "../../img/Quizzical.png";
import Image2 from "../../img/bookTracker.png";
import Image3 from "../../img/groundUp.png";
import Image4 from "../../img/passwordGenerator.png";
import Image5 from "../../img/employeeDirectory.png";
import Image6 from "../../img/project6.jpeg";




function ProjectContainer() {
    return (
        <Container>
            <section class="firstThree">
                <h1 class="block-header portfolioheader">Portfolio</h1>
                <hr />
                <CardColumns>
                {/* <CardDeck> */}
                    <Card style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10  }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10  }} variant="top" src={Image} alt="Quizzical" />
                        
                        <Card.Footer>
                        <Card.Title>Quizzical</Card.Title>
                            <Card.Text>
                                description
                            </Card.Text>
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://tanman5.github.io/07-project-01/" class="project">
                                        <h6>Deployed</h6>
                                    </a>
                                    <a target="blank" href="https://github.com/tanman5/07-project-01" class="project">
                                        <h6>GitHub Repository</h6>
                                    </a>
                                </span>
                                <p>blah</p>
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Image2} alt="Book Tracker" />
                        <Card.Body>
                            <Card.Title>Book Tracker</Card.Title>
                            <Card.Text>
                                description
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://book-trackerapp.herokuapp.com/" class="project">
                                        <h6>Deployed</h6>
                                    </a>
                                    <a target="blank" href="https://github.com/tanMan5/Library-App" class="project">
                                        <h6>GitHub Repository</h6>
                                    </a>
                                </span>
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Image3} alt="GroudUp" />
                        <Card.Body>
                            <Card.Title>GroundUp</Card.Title>
                            <Card.Text>
                                description
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://infinite-coast-64919.herokuapp.com/" class="project">
                                        <h6>Deployed</h6>
                                    </a>
                                    <a target="blank" href="https://github.com/tanMan5/project3-groundup" class="project">
                                        <h6>GitHub Repository</h6>
                                    </a>
                                </span>
                            </small>
                        </Card.Footer>
                    </Card>
                {/* </CardDeck> */}
                </CardColumns>
                <br />
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={Image4} alt="Quizzical" />
                        <Card.Body>
                            <Card.Title>Password Generator</Card.Title>
                            <Card.Text>
                                description
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://tanman5.github.io/Password-Generator/" class="project">
                                        <h6>Deployed</h6>
                                    </a>
                                    <a target="blank" href="https://github.com/tanMan5/Password-Generator" class="project">
                                        <h6>GitHub Repository</h6>
                                    </a>
                                </span>
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Image5} alt="Book Tracker" />
                        <Card.Body>
                            <Card.Title>Employee Tracker</Card.Title>
                            <Card.Text>
                                description
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://tanman5.github.io/HW19.employeesDirectory/" class="project">
                                        <h6>Deployed</h6>
                                    </a>
                                    <a target="blank" href="https://github.com/tanMan5/HW19.employeesDirectory" class="project">
                                        <h6>GitHub Repository</h6>
                                    </a>
                                </span>
                            </small>
                        </Card.Footer>
                    </Card>

                    <Card>

                        <Card.Img variant="top" src={Image6} alt="GroudUp" />
                        <Card.Body>
                            <Card.Title>Eat Da Burger</Card.Title>
                            <Card.Text>
                                description
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://limitless-badlands-47193.herokuapp.com/" class="project">
                                        <h6>Deployed</h6>
                                    </a>
                                    <a target="blank" href="https://github.com/tanMan5/HW13.Burger" class="project">
                                        <h6>GitHub Repository</h6>
                                    </a>
                                </span>
                            </small>
                        </Card.Footer>

                    </Card>
                </CardDeck>
            </section>
        </Container>
    )
};

export default ProjectContainer;