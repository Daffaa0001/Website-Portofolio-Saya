import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null); 
  const [state, handleSubmit] = useForm("mrbrgdgp"); 

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-card", { 
        scrollTrigger: { trigger: contactRef.current, start: "top 80%" },
        autoAlpha: 0, y: 30, duration: 0.8
      });
    }, contactRef); 
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="contact section" ref={contactRef}>
      <div className="section-header">
        <h2>Hubungi Saya</h2>
        <p className="section-subtitle">Mari berdiskusi untuk mewujudkan ide digital Anda.</p>
      </div>
      <div className="contact-container bento-card">
        <form onSubmit={handleSubmit} className="contact-form">
          {state.succeeded ? (
            <div className="success-message">
              <h3>Pesan Terkirim</h3>
              <p>Terima kasih, saya akan segera merespons pesan Anda.</p>
            </div>
          ) : (
            <>
              <input id="nama" type="text" name="Nama" placeholder="Nama Lengkap" required />
              <input id="email" type="email" name="Email" placeholder="Alamat Email" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <textarea id="message" name="Pesan" placeholder="Pesan Anda..." rows="5" required></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <button type="submit" disabled={state.submitting} className="btn btn-primary">
                {state.submitting ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </>
          )}
        </form>
        
        <div className="socials">
          <h3>Mari Terhubung</h3>
          <p>Temukan saya di platform profesional berikut:</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/muhammad-daffa-adnaputra-b659a4310/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/mdaffaa_a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/@daffaadnaputra" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://www.tiktok.com/@daapss__" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;