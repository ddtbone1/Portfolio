import React from 'react'
import { FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa'

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container" data-aos="fade-up">
        <div className="hero-content">
          <h1 data-aos="fade-right" data-aos-delay="200">
            Hi, I'm <span className="highlight">Karl Edu Martin Gomez</span>
          </h1>
          <h2 data-aos="fade-left" data-aos-delay="400">
            Software Developer
          </h2>
          <div className="hero-info" data-aos="fade-right" data-aos-delay="500" style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem'}}>
            <h3 style={{fontSize: '1.2rem', opacity: '0.9', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0'}}>
              <FaMapMarkerAlt style={{color: '#ff69b4'}} />
              Cebu, Philippines
            </h3>
            <h3 style={{fontSize: '1.2rem', opacity: '0.9', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0'}}>
              <FaBirthdayCake style={{color: '#ff69b4'}} />
              22 years old
            </h3>
          </div>
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
          <div className="profile-image-container">
            <img 
              src="/images/profile-picture.png" 
              alt="Karl Edu Martin Gomez - Software Developer" 
              className="profile-picture"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home