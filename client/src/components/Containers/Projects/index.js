import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import CardColumns from 'react-bootstrap/CardColumns'
import Image from "../../img/Quizzical.png";
import Image2 from "../../img/bookTracker.png";
import Image3 from "../../img/groundUp.png";
import Image4 from "../../img/passwordGenerator.png";
import Image5 from "../../img/employeeDirectory.png";
import Image6 from "../../img/project6.jpeg";
import "./style.css";




function ProjectContainer() {
    return (
        <Container>
            <section class="firstThree">
                <Row className="justify-content-md-center">
                <h1>Portfolio</h1>
                </Row>
                <hr />
                
                <CardColumns>
                {/* <CardDeck> */}
                <Card style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, width: '22rem', }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200   }}  variant="top" src={Image} alt="Quizzical" />
                        
                        <Card.Title>Quizzical</Card.Title>
                            <Card.Text>
                                Lorem a;sdjf;lahsfang;ladghldas;flkdsfjoasdjfakdlfml;dakjsflajfkajf;ljads;fjal;faldm ljdfl;adjsf;lajdsf afl jal
                            </Card.Text>
                            <Card.Footer>
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://tanman5.github.io/07-project-01/" class="project">
                                       <i className="fas fa-globe fa-3x" aria-hidden="true" />
                                    </a>
                                    <a target="blank" href="https://github.com/tanman5/07-project-01" class="project">
                                        <i className="fab fa-github fa-3x" aria-hidden="true" />
                                    </a>
                                </span>
                                
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, width: '22rem', }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200   }}  variant="top" src={Image2} alt="Book Tracker"  />
                        
                        
                        <Card.Title>Book Tracker</Card.Title>
                            <Card.Text>
                                Lorem a;sdjf;lahsfang;ladghldas;flkdsfjoasdjfakdlfml;dakjsflajfkajf;ljads;fjal;faldm ljdfl;adjsf;lajdsf afl jal
                            </Card.Text>
                            <Card.Footer>
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://book-trackerapp.herokuapp.com/" class="project">
                                    <i className="fas fa-globe fa-3x" aria-hidden="true" />
                                    
                                    </a>
                                    <a target="blank" href="https://github.com/tanMan5/Library-App" class="project">
                                    <i className="fab fa-github fa-3x" aria-hidden="true" />
                                    </a>
                                </span>
                            </small>
                            
                        </Card.Footer>
                    </Card>
                    <Card style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, width: '22rem', }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200   }}  variant="top" src={Image3} alt="GroudUp"  />
                        
                        <Card.Title>Groud Up</Card.Title>
                            <Card.Text>
                                Lorem a;sdjf;lahsfang;ladghldas;flkdsfjoasdjfakdlfml;dakjsflajfkajf;ljads;fjal;faldm ljdfl;adjsf;lajdsf afl jal
                            </Card.Text>
                            <Card.Footer>
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://infinite-coast-64919.herokuapp.com/" class="project">
                                    <i className="fas fa-globe fa-3x" aria-hidden="true" />
                                    </a>
                                    <a target="blank" href="https://github.com/tanMan5/project3-groundup" class="project">
                                    <i className="fab fa-github fa-3x" aria-hidden="true" />
                                    </a>
                                </span>
                            </small>
                        </Card.Footer>
                    </Card>
                    
                    
                {/* </CardDeck> */}
                </CardColumns>
                <br />
                <CardColumns>
                {/* <CardDeck> */}
                <Card style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, width: '22rem', }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200   }} variant="top" src={Image4} alt="Password Generator"  />
                        
                        <Card.Title>Password Generator</Card.Title>
                            <Card.Text>
                                Lorem a;sdjf;lahsfang;ladghldas;flkdsfjoasdjfakdlfml;dakjsflajfkajf;ljads;fjal;faldm ljdfl;adjsf;lajdsf afl jal
                            </Card.Text>
                            <Card.Footer>
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://tanman5.github.io/Password-Generator/" class="project">
                                    <i className="fas fa-globe fa-3x" aria-hidden="true" />
                                    </a>
                                    <a target="blank" href="https://github.com/tanMan5/Password-Generator" class="project">
                                    <i className="fab fa-github fa-3x" aria-hidden="true" />
                                    </a>
                                </span>
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, width: '22rem', }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200   }}  variant="top" src={Image5} alt="Employee Tracker"   />
                        
                        <Card.Title>Employee Directory</Card.Title>
                            <Card.Text>
                                Lorem a;sdjf;lahsfang;ladghldas;flkdsfjoasdjfakdlfml;dakjsflajfkajf;ljads;fjal;faldm ljdfl;adjsf;lajdsf afl jal
                            </Card.Text>
                            <Card.Footer>
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://tanman5.github.io/HW19.employeesDirectory/" class="project">
                                    <i className="fas fa-globe fa-3x" aria-hidden="true" />
                                    </a>
                                    <a target="blank" href="https://github.com/tanMan5/HW19.employeesDirectory" class="project">
                                    <i className="fab fa-github fa-3x" aria-hidden="true" />
                                    </a>
                                </span>
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card className="projectCards" style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, width: '22rem', }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200   }} variant="top" src={Image6} alt="Eat Da Burger"  />
                        
                        <Card.Title className="cardTitle">Eat Da Burger</Card.Title>
                            <Card.Text className="cardText">
                                Lorem a;sdjf;lahsfang;ladghldas;flkdsfjoasdjfakdlfml;dakjsflajfkajf;ljads;fjal;faldm ljdfl;adjsf;lajdsf afl jal
                            </Card.Text>
                            <Card.Footer>
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://limitless-badlands-47193.herokuapp.com/" class="project">
                                    <i className="fas fa-globe fa-3x" aria-hidden="true" />
                                    </a>
                                    <a target="blank" href="https://github.com/tanMan5/HW13.Burger" class="project">
                                    <i className="fab fa-github fa-3x" aria-hidden="true" />
                                    </a>
                                </span>
                            </small>
                        </Card.Footer>
                    </Card>
                    
                    
                {/* </CardDeck> */}
                </CardColumns>
                
            </section>
        </Container>
    )
};

export default ProjectContainer;