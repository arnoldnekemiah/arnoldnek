import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Import motion
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiKalilinux,
} from 'react-icons/si';

function Toolstack() {
  const iconVariants = { // Re-define or import from a shared file if used elsewhere
    hover: {
      scale: 1.1,
      y: -5,
      boxShadow: "0px 0px 15px var(--neon-purple)", // Using different color for tools
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  const tools = [
    { icon: <SiKalilinux />, name: "Kali Linux" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {tools.map((tool) => (
        <Col xs={4} md={2} key={tool.name} className="tech-icon-col"> {/* Wrapper for motion.div */}
          <motion.div
            className="tech-icons glassmorphic" // Apply both classes
            whileHover="hover"
            variants={iconVariants}
          >
            {tool.icon}
            {/* Optional: add tool.name text below icon if design allows */}
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
