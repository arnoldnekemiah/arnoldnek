import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  isBlog,
  demoLink,
  techStacks,
}) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          {description}
        </Card.Text>

        {/* Tech Stacks */}
        <div>
          <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '20px' }}>
            {techStacks && techStacks.map((stack, index) => (
              <li key={stack} style={{ display: 'inline', marginRight: '10px' }}>
                {index > 0 && ' • '}
                {stack}
              </li>
            ))}
          </ul>
        </div>

        <Button variant="primary" href={ghLink} target="_blank">
          <BsGithub />
          {' '}
          &nbsp;
          {isBlog ? 'Blog' : 'GitHub'}
        </Button>
        {'\n'}
        {'\n'}

        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: '10px' }}
          >
            <CgWebsite />
            {' '}
            &nbsp;
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

// Add PropTypes definitions
ProjectCards.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
  isBlog: PropTypes.bool.isRequired,
  demoLink: PropTypes.string.isRequired,
  techStacks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCards;
