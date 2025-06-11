import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
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
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    hover: {
      scale: 1.03,
      boxShadow: '0px 0px 20px var(--neon-green)', /* Enhanced shadow on hover */
      y: -5,
    },
  };

  return (
    <motion.div
      className="project-card-view glassmorphic" // Added glassmorphic
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <Card.Img variant="top" src={imgPath} alt="card-img" className="card-img-top" />
      <Card.Body>
        <Card.Title style={{ color: 'var(--neon-blue)' }}>{title}</Card.Title>
        {' '}
        {/* Neon title */}
        <Card.Text style={{ textAlign: 'justify', color: 'var(--text-secondary)' }}>
          {description}
        </Card.Text>

        {/* Tech Stacks */}
        <div className="tech-stack-container">
          <ul className="tech-stack-list">
            {techStacks && techStacks.map((stack) => (
              <li key={stack} className="tech-stack-item">
                {stack}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-buttons-container">
          <Button variant="primary" href={ghLink} target="_blank" className="futuristic-btn">
            <BsGithub style={{ marginRight: '5px' }} />
            {isBlog ? 'Blog' : 'GitHub'}
          </Button>

          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              className="futuristic-btn"
              style={{ marginLeft: '10px' }}
            >
              <CgWebsite style={{ marginRight: '5px' }} />
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </motion.div>
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
