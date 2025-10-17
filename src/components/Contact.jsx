import React, { useState } from 'react'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { FaGithub, FaFacebook } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with a backend service or email service
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <MdEmail />,
      title: 'Gmail',
      value: 'ddotbone1@gmail.com',
      link: 'mailto:ddotbone1@gmail.com'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'github.com/ddtbone1',
      link: 'https://github.com/ddtbone1'
    },
    {
      icon: <FaFacebook />,
      title: 'Facebook',
      value: 'facebook.com/ddtbone1',
      link: 'https://www.facebook.com/ddtbone1'
    },
    {
      icon: <MdLocationOn />,
      title: 'Location',
      value: 'Cebu, Philippines',
      link: '#'
    }
  ]

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-header" data-aos="fade-up">
          <h2 className="section-title">
            Let's Work Together
          </h2>
          <p className="section-subtitle">
            Ready to bring your ideas to life? Let's connect and create something amazing!
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-section" data-aos="fade-right" data-aos-delay="300">
            <div className="contact-intro">
              <h3>Get In Touch</h3>
              <p>
                I'm always excited to discuss new opportunities and collaborate on innovative projects. 
                Whether you have a question, a project idea, or just want to connect, I'd love to hear from you!
              </p>
            </div>
            
            <div className="contact-cards-grid">
              {contactInfo.map((item, index) => (
                <a 
                  key={item.title}
                  href={item.link}
                  className="contact-card-modern"
                  data-aos="zoom-in"
                  data-aos-delay={400 + index * 100}
                  target={item.link.startsWith('http') ? "_blank" : "_self"}
                  rel={item.link.startsWith('http') ? "noopener noreferrer" : ""}
                >
                  <div className="contact-card-icon-modern">{item.icon}</div>
                  <div className="contact-card-info">
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                  <div className="contact-card-arrow">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2L14 8L8 14M14 8H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-cta" data-aos="fade-up" data-aos-delay="800">
              <div className="availability-badge">
                <div className="status-dot"></div>
                <span>Available for new opportunities</span>
              </div>
            </div>
          </div>

          <div className="contact-form-section" data-aos="fade-left" data-aos-delay="400">
            <div className="form-header">
              <h3>Send a Message</h3>
              <p>Fill out the form below and I'll get back to you within 24 hours.</p>
            </div>
            
            <form className="contact-form-modern" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group-modern">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group-modern">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group-modern">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group-modern">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              
              <button type="submit" className="btn-modern-primary">
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact