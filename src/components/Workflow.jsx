import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const workflowSteps = [
  { id: "01", title: "Analisis & Logika", desc: "Mendefinisikan masalah, mengumpulkan kebutuhan sistem, dan menyusun arsitektur dasar aplikasi." },
  { id: "02", title: "Perancangan (Blueprint)", desc: "Membuat wireframe UI/UX presisi dan merancang struktur database yang efisien." },
  { id: "03", title: "Eksekusi Kode (Assembly)", desc: "Menulis baris kode yang bersih, modular, dan terstruktur menggunakan teknologi modern." },
  { id: "04", title: "Pengujian (Quality Control)", desc: "Melakukan testing ketat untuk memastikan tidak ada bug dan performa berjalan optimal." }
];

function Workflow() {
  const flowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (flowRef.current) {
        const cards = flowRef.current.querySelectorAll('.flow-card');
        gsap.fromTo(cards, 
          { autoAlpha: 0, x: -50 },
          {
            autoAlpha: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power2.out",
            scrollTrigger: {
              trigger: flowRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }, flowRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="workflow" className="workflow section">
      <h2>System Workflow</h2>
      <div className="workflow-container" ref={flowRef}>
        {workflowSteps.map((step, index) => (
          <div className="flow-card" key={index}>
            <div className="flow-id">{step.id}</div>
            <div className="flow-content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Workflow;