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
        <Container >
            <section class="firstThree">
                <Row className="justify-content-md-center">
                <h1>Portfolio</h1>
                </Row>
                <hr />                
                <CardColumns>
                {/* <CardDeck> */}
                <Card className="cardPro" class="col-md-6 col-sm-12 col-xs-12" style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, width: '22rem', boxShadow: "5px 5px 5px rgba(169,249,252,0.30)" }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200   }}  variant="top" src={Image} alt="Quizzical" />
                        
                        <Card.Title>Quizzical</Card.Title>
                        <div>
                        This a trivia app that ranges in questions from TV shows, history, to sports, etc. There is no timer and the user will be allowed to compete against oneself for a high score. A wikipedia API link is included in each question/answer to which a user can click on to show more descriptive information.
                        </div>
                            <hr />
                            <footer className="cardFooter">
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://tanman5.github.io/07-project-01/" class="project">
                                       <i class="littleFooter" className="fas fa-globe fa-3x" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Deployed" />
                                    </a>
                                    <a target="blank" href="https://github.com/tanman5/07-project-01" class="project">
                                        <i className="fab fa-github fa-3x" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Deployed" />
                                    </a>
                                </span>
                                
                            </small>
                        </footer>
                        
                    </Card>
                    
                    <Card className="cardPro" class="col-md-6 col-sm-12 col-xs-12" style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, width: '22rem', boxShadow: "5px 5px 5px rgba(169,249,252,0.30)" }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200   }}  variant="top" src={Image2} alt="Book Tracker"  />
                        
                        
                        <Card.Title>Book Tracker</Card.Title>
                        <div>
                        The Book Tracker app is a helpful tool for tracking books that you are currently reading and have finished reading.
                        </div>
                            <hr />
                            <footer className="cardFooter">
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://book-trackerapp.herokuapp.com/" class="project">
                                    <i class="littleFooter" className="fas fa-globe fa-3x" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Deployed" />
                                    
                                    </a>
                                    <a target="blank" href="https://github.com/tanMan5/Library-App" class="project">
                                    <i className="fab fa-github fa-3x" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Deployed" />
                                    </a>
                                </span>
                            </small>
                            
                       </footer>
                        
                    </Card>
                    <Card className="cardPro" class="col-md-6 col-sm-12 col-xs-12" style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, width: '22rem', boxShadow: "5px 5px 5px rgba(169,249,252,0.30)" }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200   }}  variant="top" src={Image3} alt="GroudUp"  />
                        
                        <Card.Title>Ground Up</Card.Title>
                            <div>
                            Users can visit the application from anywhere. On the home page, there is a display of the last drink and shop that was rated. There is also a display of the most popular shops. Users can sign/log in to give their reviews of drinks and shops.
                            </div>
                            <hr />
                            <footer className="cardFooter">
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://infinite-coast-64919.herokuapp.com/" class="project">
                                    <i class="littleFooter" className="fas fa-globe fa-3x" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Deployed" />
                                    </a>
                                    <a target="blank" href="https://github.com/tanMan5/project3-groundup" class="project">
                                    <i className="fab fa-github fa-3x" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Deployed" />
                                    </a>
                                </span>
                            </small>
                            
                       </footer>
                        
                    </Card>
                    
                    
                {/* </CardDeck> */}
                </CardColumns>
                <br />
                <CardColumns>
                {/* <CardDeck> */}
                <Card className="cardPro" class="col-md-6 col-sm-12 col-xs-12" style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, width: '22rem', boxShadow: "5px 5px 5px rgba(169,249,252,0.30)" }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200   }} variant="top" src={Image4} alt="Password Generator"  />
                        
                        <Card.Title>Password Generator</Card.Title>
                        <div>
                        In this assignment, the application creates a secure password based on a criteria entered by the user.
                        </div>
                            <hr />
                            <footer className="cardFooter">
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://tanman5.github.io/Password-Generator/" class="project">
                                    <i class="littleFooter" className="fas fa-globe fa-3x" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Deployed" />
                                    </a>
                                    <a target="blank" href="https://github.com/tanMan5/Password-Generator" class="project">
                                    <i className="fab fa-github fa-3x" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Deployed" />
                                    </a>
                                </span>
                            </small>
                       </footer>
                        
                    </Card>
                    <Card className="cardPro" class="col-md-6 col-sm-12 col-xs-12" style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, width: '22rem', boxShadow: "5px 5px 5px rgba(169,249,252,0.30)" }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200   }}  variant="top" src={Image5} alt="Employee Tracker"   />
                        
                        <Card.Title>Employee Directory</Card.Title>
                        <div>
                        In this application I broke up the application's UI into components, managed component state, and responded to user events. This gives access to an employee directory.
                        </div>
                            <hr />
                            <footer className="cardFooter">
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://tanman5.github.io/HW19.employeesDirectory/" class="project">
                                    <i class="littleFooter" className="fas fa-globe fa-3x" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Deployed" />
                                    </a>
                                    <a target="blank" href="https://github.com/tanMan5/HW19.employeesDirectory" class="project">
                                    <i className="fab fa-github fa-3x" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Deployed" />
                                    </a>
                                </span>
                            </small>
                       </footer>
                        
                    </Card>
                    <Card className="cardPro" class="col-md-6 col-sm-12 col-xs-12" style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, width: '22rem', boxShadow: "5px 5px 5px rgba(169,249,252,0.30)" }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200   }} variant="top" src={Image6} alt="Eat Da Burger"  />
                        
                        <Card.Title className="cardTitle">Eat Da Burger</Card.Title>
                        <div>
                        This application allows the user to add or devour a burger. This application was built with MySQL, Express, Node, Handlebars, and an ORM.
                            </div>
                            <hr />
                            <footer className="cardFooter">
                            <small className="text-muted">
                                <span>
                                    <a target="blank" href="https://limitless-badlands-47193.herokuapp.com/" class="project">
                                    <i class="littleFooter" className="fas fa-globe fa-3x" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Deployed" />
                                    </a>
                                    <a target="blank" href="https://github.com/tanMan5/HW13.Burger" class="project">
                                    <i className="fab fa-github fa-3x" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Deployed" />
                                    </a>
                                </span>
                            </small>
                       </footer>
                        
                    </Card>
                    
                    
                {/* </CardDeck> */}
                </CardColumns>
                
            </section>
        </Container>
    )
};

export default ProjectContainer;