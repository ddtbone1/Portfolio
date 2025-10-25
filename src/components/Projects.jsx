import React, { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaDesktop, FaDatabase, FaShoppingCart, FaUsers, FaClock, FaCode } from 'react-icons/fa'
import { SiDotnet, SiReact, SiMysql, SiSqlite } from 'react-icons/si'
import { MdWork, MdTimer } from 'react-icons/md'
// Use images from public folder - easier to add your screenshots
// Just save your screenshots as:
// public/images/pos-screenshot.png (Marty's Karenderia)
// public/images/crm-screenshot.png (SimpleCRM Dashboard)
// public/images/churchsite-screenshot.png (Church Website)
// public/images/pulox-screenshot.png (Pulox Project)
const posScreenshot = '/images/pos-screenshot.png'
const crmScreenshot = '/images/crm-screenshot.png'
const churchScreenshot = '/images/churchsite-screenshot.png'
const puloxScreenshot = '/images/pulox-screenshot.png'

const Projects = () => {
  const [failedImages, setFailedImages] = useState(new Set())

  // Handle image loading errors
  const handleImageError = (projectId) => {
    setFailedImages(prev => new Set([...prev, projectId]))
  }
  const projects = [
    {
      id: 1,
      title: "Marty's Karenderia - Restaurant POS",
      subtitle: "Point of Sale System",
      description: "A comprehensive Point of Sale system for restaurants built with C# WinForms and SQL Server. Complete solution for restaurant operations including sales tracking, inventory management, employee management, and receipt printing.",
      image: posScreenshot,
      technologies: ['.NET WinForms', 'SQL Server', 'C#', 'PDFSharp', 'Crystal Reports'],
      category: 'Desktop Application',
      status: 'Completed',
      githubUrl: 'https://github.com/ddtbone1/Restaurant-POS',
    },
    {
      id: 2,
      title: 'Church Website',
      subtitle: 'Religious Community Platform',
      description: 'A modern and responsive church website built with React and modern web technologies. Features include service information, event calendar, ministry details, online donations, and community engagement tools.',
      image: churchScreenshot,
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Responsive Design'],
      category: 'Web Application',
      status: 'In Progress',
      githubUrl: 'https://github.com/ddtbone1/church-website',
      liveUrl: 'https://basakbiblebaptistchurch.netlify.app/',
    },
    {
      id: 3,
      title: 'Pulox',
      subtitle: 'Hybrid Post-ASR Error Correction and Summarization Pipeline',
      description: 'An innovative machine learning application for English-Tagalog classroom lecture transcripts. Features hybrid post-ASR error correction and summarization pipeline using neural networks and OpenAI ASR technology.',
      image: puloxScreenshot,
      technologies: ['Electron', 'OpenAI ASR', 'Python', 'HTML/CSS', 'Neural Networks', 'Machine Learning'],
      category: 'Machine Learning Application',
      status: 'In Progress',
      githubUrl: 'https://github.com/ddtbone1/pulox',
      liveUrl: 'https://pulox.netlify.app/',
    }
  ]

  const getStatusBadge = (status) => {
    const statusStyles = {
      'Completed': 'status-completed',
      'In Progress': 'status-progress',
      'Planning': 'status-planning'
    }
    return statusStyles[status] || 'status-default'
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header" data-aos="fade-up">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work in web and desktop application development
          </p>
        </div>

        <div className="projects-portfolio-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="portfolio-project-card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="portfolio-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="portfolio-image"
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-links">
                    <a 
                      href={project.githubUrl} 
                      className="portfolio-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Source Code"
                    >
                      <FaGithub />
                    </a>
                    {project.liveUrl && project.liveUrl !== 'YOUR_DOMAIN_HERE' && (
                      <a 
                        href={project.liveUrl}
                        className="portfolio-link portfolio-link-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {(!project.liveUrl || project.liveUrl === 'YOUR_DOMAIN_HERE') && (
                      <div className="portfolio-link portfolio-link-demo">
                        <FaExternalLinkAlt />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-subtitle">{project.subtitle}</p>
                <p className="portfolio-description">{project.description}</p>
                
                <div className="portfolio-meta">
                  <span className={`portfolio-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                  <span className="portfolio-category">{project.category}</span>
                </div>
                
                <div className="portfolio-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="portfolio-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects