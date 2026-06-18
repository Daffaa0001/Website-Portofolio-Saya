import React from 'react';
import { createPortal } from 'react-dom';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return createPortal(
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        
        <span className="modal-close" onClick={onClose}>&times;</span>
        
        <div className="modal-img-container">
          <img src={project.imgSrc} alt={project.title} />
        </div>

        <div className="modal-body">
          <h2>{project.title}</h2>
          
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          
          <p>{project.description}</p>
          
          <div className="modal-links">
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-visit"
            >
              Kunjungi Situs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
}

export default ProjectModal;