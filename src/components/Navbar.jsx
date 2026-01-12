import React, { useEffect } from 'react';

function Navbar() {

  // FUNGSI BARU UNTUK SMOOTH SCROLL
  const handleNavClick = (e) => {
    // 1. Mencegah 'lompatan' instan bawaan browser
    e.preventDefault();
    
    // 2. Ambil tujuan href (contoh: "#home")
    const href = e.currentTarget.getAttribute('href');
    
    // 3. Cari elemen section yang dituju
    const section = document.querySelector(href);
    
    // 4. Scroll ke elemen itu dengan halus
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Kode IntersectionObserver Anda (Sudah Benar, Biarkan Saja)
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".navbar a");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove("active"));
          const id = entry.target.getAttribute("id");
          const activeLink = document.querySelector(`.navbar a[href*="${id}"]`);
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []); 

  return (
    <nav className="navbar">
      <ul>
        {/* TAMBAHKAN onClick={handleNavClick} di setiap link */}
        <li><a href="#home" onClick={handleNavClick}>Profil</a></li>
        <li><a href="#skills" onClick={handleNavClick}>Keahlian</a></li>
        <li><a href="#projects" onClick={handleNavClick}>Proyek</a></li>
        <li><a href="#contact" onClick={handleNavClick}>Kontak</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;