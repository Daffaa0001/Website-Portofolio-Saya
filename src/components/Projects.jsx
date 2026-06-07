import React, { useState, useEffect, useRef } from 'react';
import ProjectModal from './ProjectModal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    title: "Landing Page VinixRoastery",
    imgSrc: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
    description: "Website landing page modern untuk kedai kopi VinixRoastery, dirancang dengan visual yang estetis.",
    tags: ["React", "Tailwind CSS", "GSAP"],
    liveLink: "https://vinixroastery.vercel.app/"
  },
  {
    title: "SmartBudget",
    imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    description: "Aplikasi manajemen keuangan pribadi untuk melacak arus kas dan mengatur anggaran secara efisien.",
    tags: ["PHP", "MySQL", "Bootstrap 5"],
    liveLink: "http://smartbudget.wasmer.app/"
  },
  {
    title: "VinixRoastery E-commerce",
    imgSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    description: "Platform toko online penjualan biji kopi dengan katalog interaktif dan fitur keranjang belanja.",
    tags: ["PHP", "MySQL", "JavaScript"],
    liveLink: "https://roast-daoa.wasmer.app/"
  },
  {
    title: "Landing Page Rental Mobil",
    imgSrc: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop",
    description: "Landing page profesional responsif yang menonjolkan katalog armada dengan CTA efektif.",
    tags: ["React", "Tailwind", "Vite"],
    liveLink: "https://landing-page-rentaldao.vercel.app/"
  },
  {
    title: "Landing Page SmartBudget",
    imgSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    description: "Halaman web informatif untuk memperkenalkan fitur unggulan aplikasi SmartBudget.",
    tags: ["React", "Vite", "GSAP"],
    liveLink: "https://landingpage-smartbudget.vercel.app/"
  },
  {
    title: "Website Rental Mobil",
    imgSrc: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
    description: "Sistem informasi penyewaan mobil berbasis web untuk cek spesifikasi dan booking kendaraan.",
    tags: ["PHP", "MYSQL", "JavaScript"],
    liveLink: "https://rentyourcar.wasmer.app/"
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const gridRef = useRef(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const handleShowMore = () => {
    if (visibleCount < projectData.length) {
      setVisibleCount(projectData.length);
    } else {
      setVisibleCount(3);
      const section = document.getElementById('projects');
      if(section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(gridRef.current.children, 
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1,
            scrollTrigger: { trigger: gridRef.current, start: "top 80%" }
          }
        );
        ScrollTrigger.refresh();
      }
    }, gridRef);
    return () => ctx.revert();
  }, [visibleCount]);

  return (
    <>
      <section id="projects" className="projects section">
        <div className="section-header">
          <h2>Proyek Saya</h2>
          <p className="section-subtitle">Kumpulan karya yang telah saya kembangkan.</p>
        </div>
        
        <div className="project-grid" ref={gridRef}>
          {projectData.slice(0, visibleCount).map((project, index) => (
            <div className="project-card bento-card" key={index}>
              <div className="img-wrapper">
                 <img src={project.imgSrc} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <button className="btn btn-outline" onClick={() => openModal(project)}>
                  Detail Proyek
                </button>
              </div>
            </div>
          ))}
        </div>

        {projectData.length > 3 && (
            <div className="show-more-container">
                <button onClick={handleShowMore} className="btn btn-outline">
                    {visibleCount >= projectData.length ? "Tampilkan Lebih Sedikit" : "Tampilkan Semua Proyek"}
                </button>
            </div>
        )}
      </section>
      
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
}

export default Projects;