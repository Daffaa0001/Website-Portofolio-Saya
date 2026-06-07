import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const workflowSteps = [
  { id: "01", title: "Analisis & Logika", desc: "Mendefinisikan masalah, kebutuhan sistem, dan menyusun arsitektur dasar." },
  { id: "02", title: "Perancangan Blueprint", desc: "Membuat wireframe UI/UX presisi dan merancang struktur database." },
  { id: "03", title: "Eksekusi Kode", desc: "Menulis baris kode modular dan terstruktur dengan teknologi modern." },
  { id: "04", title: "Quality Control", desc: "Melakukan testing ketat memastikan tidak ada bug dan performa optimal." }
];

function Workflow() {
  const flowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (flowRef.current) {
        gsap.fromTo(flowRef.current.children, 
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
            scrollTrigger: { trigger: flowRef.current, start: "top 80%" }
          }
        );
      }
    }, flowRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="workflow" className="workflow section">
      <div className="section-header">
        <h2>System Workflow</h2>
        <p className="section-subtitle">Proses terstruktur saya dalam mengembangkan sebuah produk digital yang solid.</p>
      </div>
      <div className="workflow-container" ref={flowRef}>
        {workflowSteps.map((step, index) => (
          <div className="flow-card bento-card" key={index}>
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