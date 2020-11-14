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
                <hr style={{ borderTopColor: "rgb(171, 222, 226)" }} />
                <br />
                <CardColumns>
                    {/* <CardDeck> */}
                    <Card className="cardPro" class="col-md-6 col-sm-12 col-xs-12" style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: '30rem', width: '22rem', boxShadow: "5px 5px 5px rgba(169,249,252,0.30)" }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200 }} variant="top" src={Image} alt="Quizzical" />
                        <br />
                        <br />
                        <Card.Title className="cardTitle">Quizzical</Card.Title>
                        <hr style={{ borderTopColor: "rgb(49, 68, 68)" }} />
                        <div className="description">
                            This a trivia app and the user will compete against oneself for a high score. A wikipedia API link is included in each question/answer to which a user can click on.
                        <br />
                            
                           
                        </div>
                        <hr style={{ borderTopColor: "rgb(49, 68, 68)" }} />
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

                    <Card className="cardPro" class="col-md-6 col-sm-12 col-xs-12" style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: '30rem', width: '22rem', boxShadow: "5px 5px 5px rgba(169,249,252,0.30)" }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200 }} variant="top" src={Image2} alt="Book Tracker" />
                        <br />
                        <br />
                        <Card.Title className="cardTitle">Book Tracker</Card.Title>
                        <hr style={{ borderTopColor: "rgb(49, 68, 68)" }} />
                        <div className="description">
                            The Book Tracker app is a helpful tool for tracking books that you are currently reading and have finished reading.
                        <br />
                            <br />
                           
                            
                        </div>
                        <hr style={{ borderTopColor: "rgb(49, 68, 68)" }} />
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
                    <Card className="cardPro" class="col-md-6 col-sm-12 col-xs-12" style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: '30rem', width: '22rem', boxShadow: "5px 5px 5px rgba(169,249,252,0.30)" }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200 }} variant="top" src={Image3} alt="GroudUp" />
                        <br />
                        <br />
                        <Card.Title className="cardTitle">Ground Up</Card.Title>
                        <hr style={{ borderTopColor: "rgb(49, 68, 68)" }} />
                        <div className="description">
                            On the home page, there is a display of the last drink and shop review. It also displays most popular shops. Users can sign/log in to give reviews of drinks and shops.
                            </div>
                        <hr style={{ borderTopColor: "rgb(49, 68, 68)" }} />
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
                    <Card className="cardPro" class="col-md-6 col-sm-12 col-xs-12" style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: '30rem', width: '22rem', boxShadow: "5px 5px 5px rgba(169,249,252,0.30)" }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200 }} variant="top" src={Image4} alt="Password Generator" />
                        <br />
                        <br />
                        <Card.Title className="cardTitle">Password Generator</Card.Title>
                        <hr style={{ borderTopColor: "rgb(49, 68, 68)" }} />
                        <div className="description">
                            In this assignment, the application creates a secure password based on a criteria entered by the user.
                        <br />
                            <br />
                            
                            

                        </div>
                        <hr style={{ borderTopColor: "rgb(49, 68, 68)" }} />
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
                    <Card className="cardPro" class="col-md-6 col-sm-12 col-xs-12" style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: "30rem", width: '22rem', boxShadow: "5px 5px 5px rgba(169,249,252,0.30)" }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200 }} variant="top" src={Image5} alt="Employee Tracker" />
                        <br />
                        <br />
                        <Card.Title className="cardTitle">Employee Directory</Card.Title>
                        <hr style={{ borderTopColor: "rgb(49, 68, 68)" }} />
                        <div className="description">
                            In this application I broke up the application's UI into components, managed component state, and responded to user events. This gives access to an employee directory.
                        <br />
                            
                            
                        </div>
                        <hr style={{ borderTopColor: "rgb(49, 68, 68)" }} />
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
                    <Card className="cardPro" class="col-md-6 col-sm-12 col-xs-12" style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: '30rem', width: '22rem', boxShadow: "5px 5px 5px rgba(169,249,252,0.30)" }}>
                        <Card.Img style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, height: 200 }} variant="top" src={Image6} alt="Eat Da Burger" />
                        <br />
                        <br />
                        <Card.Title className="cardTitle">Eat Da Burger</Card.Title>
                        <hr style={{ borderTopColor: "rgb(49, 68, 68)" }} />
                        <div className="description">
                            This application allows the user to add or devour a burger. This application was built with MySQL, Express, Node, Handlebars, and an ORM.
                        <br />
                            
                            

                        </div>
                        <hr style={{ borderTopColor: "rgb(49, 68, 68)" }} />
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