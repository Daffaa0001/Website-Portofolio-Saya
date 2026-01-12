import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const gridRef = useRef(null);

  useEffect(() => {
    // Gunakan gsap.context() untuk 'membersihkan' animasi saat refresh/unmount
    const ctx = gsap.context(() => {
      // Pastikan gridRef.current ada sebelum mengakses children
      if (gridRef.current) {
        const skillCards = gridRef.current.children;

        // Gunakan .fromTo() agar lebih stabil daripada .from()
        // Ini memastikan elemen benar-benar muncul (autoAlpha: 1) di akhir animasi
        gsap.fromTo(skillCards, 
          { 
            autoAlpha: 0, // Awal: Transparan (Invisible)
            y: 50         // Awal: Posisi agak ke bawah
          },
          {
            autoAlpha: 1, // Akhir: Muncul Jelas (Visible)
            y: 0,         // Akhir: Posisi normal
            duration: 0.8,
            stagger: 0.1, // Muncul bergantian
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%", // Mulai animasi saat elemen hampir masuk layar
              toggleActions: "play none none reverse" // Mainkan saat scroll down, reverse saat scroll up
            }
          }
        );
      }
    }, gridRef); 

    return () => ctx.revert(); // Cleanup
    
  }, []);

  return (
    <section id="skills" className="skills section">
      <h2>My Skills</h2>
      <div className="skill-grid" ref={gridRef}>
        <div className="skill-card">
          <i className="fab fa-html5"></i>
          <h3>HTML</h3>
        </div>
        <div className="skill-card">
          <i className="fab fa-css3-alt"></i>
          <h3>CSS</h3>
        </div>
        <div className="skill-card">
          <i className="fab fa-js"></i>
          <h3>JavaScript</h3>
        </div>
        <div className="skill-card">
          <i className="fab fa-react"></i>
          <h3>React</h3>
        </div>
        <div className="skill-card">
          <i className="fab fa-figma"></i>
          <h3>Figma</h3>
        </div>
        <div className="skill-card">
          <i className="fab fa-node-js"></i>
          <h3>Node.js</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;