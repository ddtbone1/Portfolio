import React from 'react'

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'C#', level: 85, color: '#239120' },
        { name: 'Python', level: 85, color: '#3776ab' },
        { name: 'Java', level: 85, color: '#ed8b00' },
        { name: 'SQL', level: 85, color: '#336791' },
        { name: 'HTML/CSS', level: 55, color: '#e34c26' },
      ]
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { name: 'ASP.NET Core', level: 85, color: '#512bd4' },
        { name: 'Entity Framework', level: 85, color: '#68217a' },
        { name: 'Identity Framework', level: 85, color: '#0078d4' },
        { name: 'React', level: 55, color: '#61dafb' },
        { name: 'Next.js', level: 50, color: '#000000' },
      ]
    },
    {
      category: 'Database & Tools',
      items: [
        { name: 'SQL Server', level: 85, color: '#cc2927' },
        { name: 'SQLite', level: 85, color: '#003b57' },
        { name: 'Visual Studio', level: 60, color: '#5c2d91' },
        { name: 'Git/GitHub', level: 55, color: '#f05032' },
        { name: 'Tailwind CSS', level: 50, color: '#06b6d4' },
      ]
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 data-aos="fade-up" className="section-title">
          My Skills
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" className="section-subtitle">
          Here are the technologies I work with and my proficiency levels
        </p>
        
        <div className="skills-grid-modern">
          {skills.map((category, index) => (
            <div 
              key={category.category} 
              className="skill-category-modern"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skill-items-modern">
                {category.items.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="skill-item-modern"
                    data-aos="fade-right"
                    data-aos-delay={index * 200 + skillIndex * 100}
                  >
                    <div className="skill-header">
                      <span className="skill-name-modern">{skill.name}</span>
                      <span className="skill-percentage" style={{color: skill.color}}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar-modern">
                      <div 
                        className="skill-progress-modern" 
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}30`
                        }}
                      >
                        <div className="skill-glow" style={{backgroundColor: skill.color}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills