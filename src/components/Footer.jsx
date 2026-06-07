import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Muhammad Daffa</h3>
          <p>Frontend Engineer & UI/UX Designer</p>
        </div>
        <div className="footer-links">
          <a href="#home">Profil</a>
          <a href="#about">Tentang</a>
          <a href="#projects">Proyek</a>
          <a href="#contact">Kontak</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Muhammad Daffa Adnaputra. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;