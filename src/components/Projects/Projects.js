import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
// import locator from '../../Assets/Projects/locator.jpg';
import locator2 from '../../Assets/Projects/locator2.jpeg';
import devSchool from '../../Assets/Projects/devSchool.png';
import metflixNew from '../../Assets/Projects/metflixNew.png';
import space from '../../Assets/Projects/space.png';
import doc from '../../Assets/Projects/doc.png';
import accountanta from '../../Assets/Projects/accountanta.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent
          {' '}
          <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I&lsquo;ve worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space}
              isBlog={false}
              title="Space X travelers Hub"
              description="We worked with the live data from the SpaceX API. This web application for a company that provides commercial and scientific space travel services.The application allows users to book rockets and join selected space missions.Built with React"
              techStacks={['React', 'Redux', 'RestAPI']}
              ghLink="https://github.com/arnoldnekemiah/space-travelers-hub"
              demoLink="https://space-x-travelers-hub.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devSchool}
              isBlog={false}
              title="Developer School"
              description="This was the first capstone project from microverse. This project is a website for web development schools, where students can see the courses info programs offered."
              techStacks={['JavaScript', 'HTML', 'CSS']}
              ghLink="https://github.com/arnoldnekemiah/Developer-school"
              demoLink="https://arnoldnekemiah.github.io/Developer-school/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metflixNew}
              isBlog={false}
              title="Metflix"
              description="This is a single-page app that lists movies by categories. Users can like their favourite movies, open details about each movie and leave comments."
              techStacks={['React', 'Redux', 'RestAPI']}
              ghLink="https://github.com/arnoldnekemiah/Metflix"
              demoLink="https://arnoldnekemiah.github.io/Metflix/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={locator2}
              isBlog={false}
              title="Ridelink App"
              description="I built the Ridelink app with flutter. It is an app that allows users to request for quotes for importing and exporting goods and provide container visualization"
              techStacks={['Flutter', 'Dart', 'RestAPI', 'Firebase']}
              ghLink="https://play.google.com/store/apps/details?id=com.ridelink.app&hl=en"
              demoLink="https://play.google.com/store/apps/details?id=com.ridelink.app&hl=en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doc}
              isBlog={false}
              title="Doctors clinic project"
              description="This project features two dedicated repositories for front-end and back-end, our user-friendly platform empowers users to navigate clinic pages, learn about doctors, and book appointments effortlessly. Behind the scenes, our robust back-end efficiently manages data operations, including GET, PUT, POST, and DESTROY, ensuring a smooth and secure user experience. Elevate healthcare management with our comprehensive solution. This project was made with React for front-end and Ruby on Rails for Back-end"
              techStacks={['React', 'Redux', 'Ruby on Rails', 'PostgreSql']}
              ghLink="https://github.com/arnoldnekemiah/book-an-appointment-capstone"
              demoLink="https://drive.google.com/file/d/1pTlifcIavgGnuqk3oPSvJ9684Us7RusF/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accountanta}
              isBlog={false}
              title="Accountanta"
              description="Take control of your financial life with comprehensive expense tracking, smart budgeting, and goal-based savings"
              techStacks={['Flutter', 'Dart', 'Firebase']}
              ghLink="#####"
              demoLink="https://play.google.com/store/apps/details?id=com.accountanta.app&hl=en"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
