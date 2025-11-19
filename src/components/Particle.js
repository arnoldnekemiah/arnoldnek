import React from 'react';
import Particles from 'react-tsparticles';

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: ['#3b82f6', '#8b5cf6', '#60a5fa'],
          },
          shape: {
            type: 'circle',
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#3b82f6',
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
          },
          size: {
            value: 3,
            random: true,
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.3,
              },
            },
            push: {
              particles_nb: 3,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
