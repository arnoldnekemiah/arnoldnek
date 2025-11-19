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
      <Card.Img variant="top" src={imgPath} alt="card-img" className="card-img-top" />
      <Card.Body>
        <Card.Title style={{
          fontWeight: '700',
          fontSize: '1.5rem',
          marginBottom: '1rem',
          color: '#1f2937',
        }}
        >
          {title}
        </Card.Title>

        <Card.Text style={{
          textAlign: 'justify',
          color: '#4b5563',
          lineHeight: '1.7',
          marginBottom: '1.5rem',
        }}
        >
          {description}
        </Card.Text>

        {/* Tech Stacks - Modern Badge Design */}
        {techStacks && techStacks.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '10px',
            }}
            >
              {techStacks.map((stack) => (
                <span
                  key={stack}
                  style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    color: '#3b82f6',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)';
                    e.currentTarget.style.color = '#3b82f6';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button variant="primary" href={ghLink} target="_blank">
            <BsGithub />
            {' '}
            &nbsp;
            {isBlog ? 'Blog' : 'GitHub'}
          </Button>

          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
            >
              <CgWebsite />
              {' '}
              &nbsp;
              Demo
            </Button>
          )}
        </div>
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
