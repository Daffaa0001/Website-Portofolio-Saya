import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const skillCards = gridRef.current.children;
        gsap.fromTo(skillCards, 
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, gridRef); 
    return () => ctx.revert(); 
  }, []);

  return (
    <section id="skills" className="skills section">
      <h2>My Skills</h2>
      <div className="skill-grid" ref={gridRef}>
        <div className="skill-card"><i className="fab fa-html5"></i><h3>HTML</h3></div>
        <div className="skill-card"><i className="fab fa-css3-alt"></i><h3>CSS</h3></div>
        <div className="skill-card"><i className="fab fa-js"></i><h3>JavaScript</h3></div>
        <div className="skill-card"><i className="fab fa-react"></i><h3>React</h3></div>
        <div className="skill-card"><i className="fab fa-figma"></i><h3>Figma</h3></div>
        <div className="skill-card"><i className="fab fa-node-js"></i><h3>Node.js</h3></div>
      </div>
    </section>
  );
}

export default Skills;