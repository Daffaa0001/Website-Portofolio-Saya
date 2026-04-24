import React, { useEffect } from 'react';

function Navbar() {

  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".navbar a");

    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.5 };

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

    sections.forEach(section => observer.observe(section));

    return () => { sections.forEach(section => observer.unobserve(section)); };
  }, []); 

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home" onClick={handleNavClick}>Profil</a></li>
        <li><a href="#about" onClick={handleNavClick}>Tentang</a></li> {/* MENU BARU */}
        <li><a href="#skills" onClick={handleNavClick}>Keahlian</a></li>
        <li><a href="#workflow" onClick={handleNavClick}>Proses</a></li>
        <li><a href="#projects" onClick={handleNavClick}>Proyek</a></li>
        <li><a href="#contact" onClick={handleNavClick}>Kontak</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;