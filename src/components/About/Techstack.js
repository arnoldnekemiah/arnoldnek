import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { CgCPlusPlus } from 'react-icons/cg';
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
  DiRuby,
} from 'react-icons/di';
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiRubyonrails,
  SiMysql,
} from 'react-icons/si';
import { TbBrandKotlin } from 'react-icons/tb';

function Techstack() {
  const iconVariants = {
    hover: {
      scale: 1.1,
      y: -5,
      boxShadow: '0px 0px 15px var(--neon-green)',
      transition: { type: 'spring', stiffness: 300, damping: 15 },
    },
  };

  const techSkills = [
    { icon: <CgCPlusPlus />, name: 'C++' },
    { icon: <DiJavascript1 />, name: 'JavaScript' },
    { icon: <DiRuby />, name: 'Ruby' },
    { icon: <SiRubyonrails />, name: 'Ruby on Rails' },
    { icon: <DiReact />, name: 'React' },
    { icon: <TbBrandKotlin />, name: 'Kotlin' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <DiGit />, name: 'Git' },
    { icon: <SiFirebase />, name: 'Firebase' },
    { icon: <SiRedis />, name: 'Redis' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <DiPython />, name: 'Python' },
    { icon: <DiJava />, name: 'Java' },
  ];

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {techSkills.map((skill) => (
        <Col xs={4} md={2} key={skill.name} className="tech-icon-col">
          {' '}
          {/* Wrapper for motion.div */}
          <motion.div
            className="tech-icons glassmorphic" // Apply both classes
            whileHover="hover"
            variants={iconVariants}
          >
            {skill.icon}
            {/* Optional: add skill.name text below icon if design allows */}
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
