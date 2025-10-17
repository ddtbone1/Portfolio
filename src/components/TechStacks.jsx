import React from 'react'

const TechStacks = () => {
  const techStacks = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'ShadCN UI', 'HTML', 'CSS'],
      description: 'Building responsive and interactive user interfaces with modern React frameworks'
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      technologies: ['ASP.NET Core', 'C#', 'Web API', 'MVC', 'Razor Pages', 'RESTful APIs'],
      description: 'Creating robust server-side applications with Microsoft technologies'
    },
    {
      title: 'Database Management',
      icon: '🗄️',
      technologies: ['SQL Server', 'SQLite', 'Supabase', 'Entity Framework Core', 'CRUD Operations'],
      description: 'Designing and managing database systems with modern ORM frameworks'
    },
    {
      title: 'Development Tools',
      icon: '🛠️',
      technologies: ['Visual Studio', 'VS Code', 'Git/GitHub', 'Swagger', 'Figma'],
      description: 'Professional development environment and version control systems'
    },
    {
      title: 'Machine Learning & AI',
      icon: '🤖',
      technologies: ['TensorFlow', 'Keras', 'Keras-OCR', 'CRNN Models', 'Python'],
      description: 'Exploring artificial intelligence and machine learning applications'
    },
    {
      title: 'Core Concepts',
      icon: '💡',
      technologies: ['OOP', 'Design Patterns', 'Authentication', 'Authorization', 'System Design'],
      description: 'Fundamental programming concepts and software engineering principles'
    }
  ]

  return (
    <section className="techstacks" id="techstacks">
      <div className="container">
        <h2 data-aos="fade-up" className="section-title">
          Tech Stacks
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" className="section-subtitle">
          Technologies and tools I work with
        </p>
        
        <div className="techstacks-grid">
          {techStacks.map((stack, index) => (
            <div 
              key={stack.title}
              className="techstack-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="card-icon">{stack.icon}</div>
              <h3 className="card-title">{stack.title}</h3>
              <p className="card-description">{stack.description}</p>
              <div className="tech-tags">
                {stack.technologies.map((tech, techIndex) => (
                  <span 
                    key={tech} 
                    className="tech-tag"
                    data-aos="fade-in"
                    data-aos-delay={index * 150 + techIndex * 50}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStacks