import React, { useState, useEffect, useRef } from 'react';
import ProjectModal from './ProjectModal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// DATA PROJECT
const projectData = [
  {
    title: "Landing Page VinixRoastery",
    imgSrc: "/foto/ui.jpg",
    description: "Website landing page modern untuk kedai kopi VinixRoastery, dirancang untuk menampilkan menu unggulan dan suasana tempat dengan visual yang estetis.",
    tags: ["React", "Tailwind CSS", "GSAP"],
    liveLink: "https://vinixroastery.vercel.app/"
  },
  {
    title: "SmartBudget",
    imgSrc: "/foto/web.jpg",
    description: "Aplikasi manajemen keuangan pribadi yang membantu pengguna melacak arus kas (pemasukan & pengeluaran) serta mengatur anggaran bulanan secara efisien.",
    tags: ["PHP", "MySQL", "Bootstrap 5"],
    liveLink: "http://smartbudget.wasmer.app/"
  },
  {
    title: "VinixRoastery E-commerce",
    imgSrc: "/foto/mobile.jpg",
    description: "Platform toko online berbasis web untuk penjualan biji kopi, dilengkapi dengan katalog produk interaktif dan fitur keranjang belanja yang user-friendly.",
    tags: ["PHP", "MySQL", "JavaScript"],
    liveLink: "https://roast-daoa.wasmer.app/"
  },
  {
    title: "Landing Page Roast Lab",
    imgSrc: "/foto/web1.jpg", 
    description: "Halaman web promosi yang responsif untuk Roast Lab, fokus pada penguatan branding dan penyampaian informasi produk kopi secara detail.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://roastlab.vercel.app/"
  },
  {
    title: "Landing Page SmartBudget",
    imgSrc: "/foto/web2.jpg",
    description: "Halaman web informatif yang dirancang untuk memperkenalkan aplikasi SmartBudget, menampilkan fitur unggulan, serta panduan singkat pengelolaan keuangan.",
    tags: ["React", "Vite", "GSAP"],
    liveLink: "https://landingpage-smartbudget.vercel.app/"
  },
  {
    title: "Website Rental Mobil",
    imgSrc: "/foto/web3.jpg", 
    description: "Sistem informasi penyewaan mobil berbasis web yang memudahkan pelanggan dalam melihat katalog armada, cek spesifikasi, dan melakukan proses booking kendaraan.",
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
    // Matikan scroll body saat modal terbuka
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    // Hidupkan scroll body kembali
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
        const projectCards = gridRef.current.children;
        
        gsap.fromTo(projectCards, 
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            }
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
        <h2>My Projects</h2>
        
        <div className="project-grid" ref={gridRef}>
          {projectData.slice(0, visibleCount).map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.imgSrc} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <button
                  className="btn view-btn open-modal-btn"
                  onClick={() => openModal(project)}
                >
                  View Project &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {projectData.length > 3 && (
            <div className="show-more-container">
                <button onClick={handleShowMore} className="btn-show-more">
                    {visibleCount >= projectData.length ? "Tampilkan Lebih Sedikit" : "Tampilkan Lebih Banyak"}
                </button>
            </div>
        )}

      </section>
      
      {/* Component Modal */}
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
}

export default Projects;