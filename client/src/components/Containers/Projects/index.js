import React from 'react';
import Container from 'react-bootstrap/esm/Container';

function ProjectContainer() {
    return (
        <Container>
           <section class="portfolio">
               <h1 class="block-header portfolioheader">Portfolio</h1>
               <hr />
               <article class="row mt-4">
                   <div class="col-md-6 col-lg-6 d-flex justify-content-center images">
                   <img class="img-thumbnail projectOne" src="client\src\components\img\Quizzical.png" alt="Quizzical" />
                   <div class="hoverOver">
                       <h3>Project 1: Quizzical</h3>
                       <a target="blank" href="https://tanman5.github.io/07-project-01/" class="project">
                           <h4>Deployed</h4>
                       </a>
                       <>
                       </>
                       <a target="blank" href="https://github.com/tanman5/07-project-01" class="project">
                       <h4>GitHub Repository</h4>
                       </a>
                   </div>
                   </div>

                   <div class="col-md-6 col-lg-6 d-flex justify-content-center images">
                   <img class="img-thumbnail projectTwo" src="./assets/images/Quizzical.png" alt="Book-Tracker" />
                   <div class="hoverOver">
                       <h3>Project 2: Book Tracker</h3>
                       <a target="blank" href="https://book-trackerapp.herokuapp.com/" class="project">
                           <h4>Deployed</h4>
                       </a>
                       <>
                       </>
                       <a target="blank" href="https://github.com/tanMan5/Library-App" class="project">
                       <h4>GitHub Repository</h4>
                       </a>
                   </div>
                   </div>

                   <div class="col-md-6 col-lg-6 d-flex justify-content-center images">
                   <img class="img-thumbnail projectThree" src="./assets/images/Quizzical.png" alt="Ground Up" />
                   <div class="hoverOver">
                       <h3>Project 3: GroundUp</h3>
                       <a target="blank" href="https://infinite-coast-64919.herokuapp.com/" class="project">
                           <h4>Deployed</h4>
                       </a>
                       <>
                       </>
                       <a target="blank" href="https://github.com/tanMan5/project3-groundup" class="project">
                       <h4>GitHub Repository</h4>
                       </a>
                   </div>
                   </div>

                   <div class="col-md-6 col-lg-6 d-flex justify-content-center images">
                   <img class="img-thumbnail hw" src="./assets/images/Quizzical.png" alt="Eat Da Burger" />
                   <div class="hoverOver">
                       <h3>HW: Eat Da Burger</h3>
                       <a target="blank" href="https://limitless-badlands-47193.herokuapp.com/" class="hw">
                           <h4>Deployed</h4>
                       </a>
                       <>
                       </>
                       <a target="blank" href="https://github.com/tanMan5/HW13.Burger" class="hw">
                       <h4>GitHub Repository</h4>
                       </a>
                   </div>
                   </div>

                   <div class="col-md-6 col-lg-6 d-flex justify-content-center images">
                   <img class="img-thumbnail hw" src="./assets/images/Quizzical.png" alt="Password Generator" />
                   <div class="hoverOver">
                       <h3>HW: Password-Generator</h3>
                       <a target="blank" href="https://tanman5.github.io/Password-Generator/" class="hw">
                           <h4>Deployed</h4>
                       </a>
                       <>
                       </>
                       <a target="blank" href="https://github.com/tanMan5/Password-Generator" class="hw">
                       <h4>GitHub Repository</h4>
                       </a>
                   </div>
                   </div>

                   <div class="col-md-6 col-lg-6 d-flex justify-content-center images">
                   <img class="img-thumbnail hw" src="./assets/images/Quizzical.png" alt="Employee Directory" />
                   <div class="hoverOver">
                       <h3>HW: Employee Directory</h3>
                       <a target="blank" href="https://tanman5.github.io/HW19.employeesDirectory/" class="hw">
                           <h4>Deployed</h4>
                       </a>
                       <>
                       </>
                       <a target="blank" href="https://github.com/tanMan5/HW19.employeesDirectory" class="hw">
                       <h4>GitHub Repository</h4>
                       </a>
                   </div>
                   </div>
               </article>
           </section>
        </Container>
    )
}
export default ProjectContainer;