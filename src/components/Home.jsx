import React from 'react'

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container" data-aos="fade-up">
        <div className="hero-content">
          <h1 data-aos="fade-right" data-aos-delay="200">
            Hi, I'm <span className="highlight">Karl Edu Martin Gomez</span>
          </h1>
          <h2 data-aos="fade-left" data-aos-delay="400">
            Aspiring Full Stack Software Developer
          </h2>
          <h3 data-aos="fade-right" data-aos-delay="500" style={{fontSize: '1.2rem', marginBottom: '1rem', opacity: '0.9'}}>
            4th Year BS Computer Science | UCLM | Cebu, Philippines
          </h3>
          <p data-aos="fade-up" data-aos-delay="600">
            I am an aspiring Full Stack Software Developer focused on backend development using ASP.NET Core, 
            database integration, and API-driven CRUD operations. I'm also learning React, HTML, and CSS 
            to build responsive and dynamic frontend interfaces.
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="800">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#skills" className="btn btn-secondary">
              View My Work
            </a>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left" data-aos-delay="600">
          <div className="image-placeholder">
            <div className="default-avatar">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="60" fill="rgba(255,255,255,0.1)"/>
                <circle cx="60" cy="45" r="20" fill="rgba(255,255,255,0.8)"/>
                <path d="M60 75C45 75 25 85 25 100V110H95V100C95 85 75 75 60 75Z" fill="rgba(255,255,255,0.8)"/>
              </svg>
            </div>
            <span>Karl Edu Martin Gomez</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home