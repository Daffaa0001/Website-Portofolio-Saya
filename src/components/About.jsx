import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        autoAlpha: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%"
        }
      });
    }, aboutRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about section" ref={aboutRef}>
      <h2>Tentang Saya</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Seorang pengembang web dengan fokus pada logika presisi, arsitektur <em>clean code</em>, dan antarmuka pengguna mekanikal yang interaktif. Tujuan saya adalah mengubah masalah sistem yang kompleks menjadi solusi digital yang elegan dan mudah digunakan.
          </p>
          <p>
            Saya memiliki ketertarikan mendalam pada teknologi, mesin, dan bagaimana baris-baris kode dapat disusun layaknya roda gigi yang saling bertaut—menciptakan sistem yang tidak hanya fungsional, tetapi juga memiliki estetika visual yang kuat dan performa tinggi.
          </p>
        </div>
        
        {/* Elemen Kosmetik Radar/Mesin di sudut kotak */}
        <div className="about-decoration"></div>
      </div>
    </section>
  );
}

export default About;