import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Profile() {
  const profileRef = useRef(null); // Gunakan ref untuk 'scope'

  useEffect(() => {
    // Gunakan gsap.context() untuk 'membersihkan' animasi
    const ctx = gsap.context(() => {
      // Targetkan elemen di dalam scope
      gsap.from(".text, .profile-img", {
        autoAlpha: 0, // autoAlpha akan otomatis menangani visibility:hidden
        y: 60,
        duration: 1.2,
        stagger: 0.3,
      });
    }, profileRef); // Terapkan 'scope' di sini

    // Fungsi cleanup dari context inilah yang memperbaiki error refresh
    return () => ctx.revert(); 
    
  }, []); // Array dependensi kosong tetap ada

  return (
    // Tambahkan ref ke elemen pembungkus section
    <section id="home" className="profile section" ref={profileRef}>
      <div className="profile-content">
        <div className="text">
          <h1>Halo, Saya <span>Muhammad Daffa Adnaputra</span></h1>
          <p>Seorang mahasiswa yang memiliki bakat dalam web development, dengan fokus pada desain modern, UI/UX, dan pengalaman pengguna interaktif. Saya senang membuat tampilan web yang elegan dan dinamis.</p>
          <a href="#projects" className="btn">Lihat Proyek</a>
        </div>
        
        <img 
          src="/foto/daps.png" 
          alt="Profil" 
          className="profile-img" 
        />
      </div>
    </section>
  );
}

export default Profile;