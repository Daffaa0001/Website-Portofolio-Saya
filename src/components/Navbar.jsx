import React, { useEffect, useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    if (section) {
      const navbarElement = document.querySelector('.navbar');
      const navbarHeight = navbarElement ? navbarElement.offsetHeight : 0;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight + 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-menu a");

    const observerOptions = { root: null, rootMargin: "-100px 0px 0px 0px", threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove("active"));
          const id = entry.target.getAttribute("id");
          const activeLink = document.querySelector(`.nav-menu a[href*="${id}"]`);
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
      <div className="nav-container">
        <button className="hamburger" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={handleNavClick}>Profil</a></li>
          <li><a href="#about" onClick={handleNavClick}>Tentang</a></li>
          <li><a href="#skills" onClick={handleNavClick}>Keahlian</a></li>
          <li><a href="#workflow" onClick={handleNavClick}>Proses</a></li>
          <li><a href="#projects" onClick={handleNavClick}>Proyek</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Kontak</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;