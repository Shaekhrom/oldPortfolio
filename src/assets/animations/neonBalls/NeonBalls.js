import React, { useEffect } from 'react';

const NeonBalls = () => {
  useEffect(() => {
    // Particles configuration
    const particlesConfig = {
      particles: {
        number: {
          value: 50, // Number of particles
        },
        color: {
          value: '#04d9ff', // Color of particles
        },
        shape: {
          type: 'circle', // Shape type of particles
        },
        opacity: {
          value: 0.7, // Opacity of particles
        },
        size: {
          value: 3, // Size of particles
        },
        move: {
          enable: true,
          speed: 2, // Movement speed
          direction: 'none', // Movement direction
          random: true, // Random movement
          straight: false, // Straight movement
          outMode: 'out', // Out mode ('out', 'bounce')
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: false,
          },
          onclick: {
            enable: false
          }
        },
      },
    };

    // Initialize particles
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
      window.particlesJS('particles-js', particlesConfig);
    }

    // Clean up when the component unmounts
    return () => {
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
    };
  }, []);

  return <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }} />;
};

export default NeonBalls;
