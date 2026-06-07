import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Profile() {
  const profileRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        autoAlpha: 0,
        y: 30,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, profileRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section id="home" className="profile section" ref={profileRef}>
      <div className="profile-content">
        <div className="text-content">
          <div className="status-badge fade-up">
            <span className="dot"></span> Mahasiswa Sistem Informasi & Available for Work
          </div>

          <h1 className="fade-up">Merancang solusi digital elegan,<br/><span>baris demi baris.</span></h1>
          
          <p className="subtitle fade-up">
            Halo, saya <strong>Muhammad Daffa Adnaputra</strong>. Seorang Junior Full Stack Web Development & UI/UX Design yang berbasis di Tulungagung, Indonesia.
          </p>

          <div className="btn-group fade-up">
            <a href="#projects" className="btn btn-primary">Lihat Proyek</a>
            <a href="#contact" className="btn btn-outline">Hubungi Saya</a>
          </div>
        </div>
        
        <div className="profile-img-wrapper fade-up">
          <img 
            src="/foto/daps.png" 
            alt="Profil Daffa" 
            className="profile-img" 
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;