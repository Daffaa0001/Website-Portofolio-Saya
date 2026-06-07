import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Dinas Komunikasi dan Informatika Kota Surabaya",
    role: "Full Stack Website Developer",
    period: "Feb 2026 - Present",
    points: [
      "Mendesain arsitektur UI/UX dan mengembangkan halaman admin terintegrasi untuk portal resmi surabaya.go.id.",
      "Membangun sisi frontend aplikasi berskala besar menggunakan ekosistem Next.js untuk performa rendering yang optimal.",
      "Merealisasikan sistem backend yang tangguh, aman, dan efisien menggunakan bahasa pemrograman Golang.",
      "Mengimplementasikan kontainerisasi aplikasi menggunakan Docker untuk memastikan konsistensi environment dan kemudahan deployment."
    ]
  },
  {
    company: "PT Vinix Seven Aurum (VINIX7)",
    role: "Web Developer & UI/UX Designer",
    period: "Aug 2025 - Dec 2025",
    points: [
      "Membangun MVP aplikasi web 'Vinix Roastery' yang 100% responsif menggunakan HTML5, CSS3, dan JavaScript.",
      "Mengoptimalkan performa website hingga mencapai skor Lighthouse di atas 90 untuk SEO dan Best Practices.",
      "Menerjemahkan 10+ halaman desain Figma menjadi antarmuka frontend yang presisi dan interaktif.",
      "Melakukan debugging sistem secara menyeluruh untuk meningkatkan stabilitas aplikasi sebesar 30%."
    ]
  },
  {
    company: "Yoisoweb (PT Rahma Riyadi Techno)",
    role: "Digital Content & Web Development",
    period: "Jan 2022 - Jun 2022",
    points: [
      "Merancang strategi konten yang meningkatkan Engagement Rate Instagram klien sebesar 20% dalam 3 bulan.",
      "Mengembangkan 3 Landing Page berbasis WordPress dan Elementor yang mempercepat proses checkout user hingga 40%.",
      "Mengimplementasikan teknik SEO On-Page yang meningkatkan trafik pengunjung organik sebesar 15%."
    ]
  }
];

function Experience() {
  const expRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-card", {
        autoAlpha: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: expRef.current,
          start: "top 80%"
        }
      });
    }, expRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="experience section" ref={expRef}>
      <div className="section-header">
        <h2>Pengalaman Profesional</h2>
        <p className="section-subtitle">Rekam jejak dan kontribusi nyata di industri digital.</p>
      </div>
      <div className="exp-container">
        {experiences.map((exp, index) => (
          <div key={index} className="exp-card bento-card">
            <div className="exp-header">
              <div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
              </div>
              <span className="exp-period">{exp.period}</span>
            </div>
            <ul>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;