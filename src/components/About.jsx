import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-card", {
        autoAlpha: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%"
        }
      });
    }, aboutRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about section" ref={aboutRef}>
      <div className="section-header">
        <h2>Tentang Saya</h2>
        <p className="section-subtitle">Mengenal lebih dekat latar belakang dan visi saya.</p>
      </div>
      <div className="about-content bento-card">
        <div className="about-text">
          <p>
            Saya adalah Mahasiswa <strong>Sistem Informasi di Universitas Negeri Surabaya</strong> dengan pencapaian akademik IPK 3.75/4.00. Saya memiliki spesialisasi teknis yang mendalam dalam ranah <em>Full Stack Web Development</em> dan <em>UI/UX Design</em>.
          </p>
          <p>
            Dengan pengalaman profesional merancang strategi <em>Digital Marketing</em> yang berdampak tinggi hingga mengembangkan sistem E-Commerce, saya terbiasa menjembatani antara kebutuhan bisnis dan eksekusi teknis. Saya terampil menggunakan ekosistem web modern serta memiliki pemahaman manajemen server dasar seperti Linux dan AWS Cloud.
          </p>
          <p>
            Fokus utama saya adalah membangun produk digital yang tidak hanya fungsional dan berorientasi pada hasil terukur, tetapi juga memiliki estetika visual yang kuat dan performa tinggi bagi pengguna.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;