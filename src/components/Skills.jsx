import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(gridRef.current.children, 
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 85%" }
          }
        );
      }
    }, gridRef); 
    return () => ctx.revert(); 
  }, []);

  return (
    <section id="skills" className="skills section">
      <div className="section-header">
        <h2>Keahlian Teknis</h2>
        <p className="section-subtitle">Teknologi utama yang saya gunakan untuk membangun antarmuka dan ekosistem digital.</p>
      </div>
      <div className="skill-grid" ref={gridRef}>
        <div className="skill-card bento-card"><i className="fab fa-figma"></i><h3>Figma</h3></div>
        <div className="skill-card bento-card"><i className="fab fa-html5"></i><h3>HTML</h3></div>
        <div className="skill-card bento-card"><i className="fab fa-css3-alt"></i><h3>CSS</h3></div>
        <div className="skill-card bento-card"><i className="fab fa-php"></i><h3>PHP</h3></div>
        <div className="skill-card bento-card"><i className="fas fa-database"></i><h3>MySQL</h3></div>
        <div className="skill-card bento-card"><i className="fab fa-js"></i><h3>JavaScript</h3></div>
        <div className="skill-card bento-card"><i className="fab fa-react"></i><h3>React</h3></div>
        <div className="skill-card bento-card"><i className="fas fa-layer-group"></i><h3>Next.js</h3></div>
        <div className="skill-card bento-card"><i className="fab fa-node-js"></i><h3>Node.js</h3></div>
      </div>
    </section>
  );
}

export default Skills;