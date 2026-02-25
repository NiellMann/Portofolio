import React from 'react'

function App() {
  const skills = [
    { name: 'Electrical Installation', desc: 'House wiring, industrial electrical systems, and maintenance' },
    { name: 'PLC Programming', desc: 'Siemens, Mitsubishi, and Omron PLC programming' },
    { name: 'Automation', desc: 'Industrial automation and control systems' },
    { name: 'Electrical Design', desc: 'CAD electrical drawing and circuit design' },
    { name: 'Microcontroller', desc: 'Arduino, ESP32, and embedded systems' },
    { name: 'Backend Development', desc: 'Go, Python, Node.js, and database management' },
  ]

  const experience = [
    {
      title: 'Electrical Engineer',
      company: 'PT. Industri Jaya',
      date: '2023 - Present',
      duties: [
        'Design and install electrical systems for industrial facilities',
        'Program PLC for automation processes',
        'Conduct maintenance and troubleshooting of electrical equipment',
      ]
    },
    {
      title: 'Electrical Technician',
      company: 'PT. Maju Bersama',
      date: '2021 - 2023',
      duties: [
        'Install and maintain electrical wiring in commercial buildings',
        'Perform routine inspections and safety checks',
        'Repair and replace electrical components',
      ]
    },
  ]

  const projects = [
    {
      title: 'Smart Home Electrical System',
      desc: 'IoT-based home automation system with mobile control',
      tech: ['Arduino', 'ESP32', 'React']
    },
    {
      title: 'PLC-Based Conveyor System',
      desc: 'Industrial conveyor control system with sensor integration',
      tech: ['Siemens PLC', 'HMI', 'Motor Control']
    },
    {
      title: 'Solar Power Monitoring',
      desc: 'Real-time solar panel monitoring system',
      tech: ['Python', 'IoT', 'React']
    },
  ]

  return (
    <>
      {/* Header */}
      <header>
        <div className="logo">Daniel<span>.E</span></div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Electrical Engineer &<br /><span>Backend Developer</span></h1>
          <p>
            Experienced in electrical installation, industrial automation, 
            and backend development. Passionate about creating efficient 
            and reliable systems.
          </p>
          <a href="#contact" className="btn">Get In Touch</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="section-title">
          <h2>About Me</h2>
          <div className="line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Daniel Imanuel Manafe</h3>
            <p>
              I am an electrical engineer with expertise in industrial electrical systems, 
              PLC programming, and automation. I also have skills in backend development 
              using modern technologies.
            </p>
            <p>
              Based in Yogyakarta, Indonesia, I have worked on various projects 
              ranging from residential wiring to industrial automation systems.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <h4>3+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-box">
              <h4>15+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat-box">
              <h4>10+</h4>
              <p>Happy Clients</p>
            </div>
            <div className="stat-box">
              <h4>100%</h4>
              <p>Quality Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <div className="section-title">
          <h2>Skills</h2>
          <div className="line"></div>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.name}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experience">
        <div className="section-title">
          <h2>Experience</h2>
          <div className="line"></div>
        </div>
        <div className="experience-list">
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="date">{exp.date}</p>
              <ul>
                {exp.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <div className="section-title">
          <h2>Projects</h2>
          <div className="line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="section-title">
          <h2>Contact</h2>
          <div className="line"></div>
        </div>
        <div className="contact-content">
          <p>
            Interested in working together? Feel free to reach out 
            for any electrical engineering or backend development projects.
          </p>
          <div className="contact-links">
            <a href="mailto:danielimanuelmanafe@gmail.com">Email Me</a>
            <a href="https://linkedin.com/in/danielimanuelmanafe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/NiellMann" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Daniel Imanuel Manafe. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
