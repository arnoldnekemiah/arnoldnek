import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Engineer',
          'Robotics Programmer',
          'Mobile Application Developer',
          'Ruby on Rails Developer',
          'Full-Stack Developer',
          'Open Source Contributor',
          'Machine Learning Enthusiast',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
