'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Initialize website functionality when component mounts
    const initWebsite = () => {
      // This will be handled by our script.js file loaded in layout
      if (typeof window !== 'undefined' && (window as any).initializeWebsite) {
        (window as any).initializeWebsite();
      }
    };

    // Small delay to ensure scripts are loaded
    const timer = setTimeout(initWebsite, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">John Doe</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section d-flex align-items-center min-vh-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title mb-3">Hello, I&apos;m <span className="text-primary">John Doe</span></h1>
                <h2 className="hero-subtitle mb-4">Full Stack Developer</h2>
                <p className="hero-description mb-4">I create beautiful, responsive web applications with modern technologies. Passionate about clean code, user experience, and innovative solutions.</p>
                <div className="hero-buttons">
                  <a href="#contact" className="btn btn-primary btn-lg me-3">Get In Touch</a>
                  <a href="#projects" className="btn btn-outline-light btn-lg">View My Work</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image text-center">
                <img src="https://storage.googleapis.com/oi-image-gen-results/cm41cklk1000c0c8fh37rj6gm/cm41cklks000e0c8f9c7h0j3y/image.png" alt="Professional headshot of John Doe, Full Stack Developer" className="img-fluid rounded-circle profile-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">Get to know me better</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <img src="https://storage.googleapis.com/oi-image-gen-results/cm41cklk1000c0c8fh37rj6gm/cm41cklku000g0c8f36qgqmnb/image.png" alt="John Doe working at his development workspace" className="img-fluid rounded" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h3 className="mb-4">Passionate Developer & Problem Solver</h3>
                <p className="mb-4">With over 5 years of experience in web development, I specialize in creating dynamic, user-friendly applications that solve real-world problems. My journey began with a curiosity for how websites work, and it has evolved into a passion for crafting digital experiences.</p>
                
                <div className="row mb-4">
                  <div className="col-6">
                    <div className="about-item">
                      <h5>50+</h5>
                      <p>Projects Completed</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="about-item">
                      <h5>5+</h5>
                      <p>Years Experience</p>
                    </div>
                  </div>
                </div>
                
                <p className="mb-4">When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and staying updated with the latest industry trends.</p>
                
                <a href="/assets/john-doe-resume.pdf" className="btn btn-primary" download>Download Resume</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Skills & Expertise</h2>
              <p className="section-subtitle">Technologies I work with</p>
            </div>
          </div>
          <div className="row">
            {/* Frontend Skills */}
            <div className="col-lg-6 mb-5">
              <h4 className="mb-4">Frontend Development</h4>
              <div className="skill-item mb-4">
                <div className="skill-info d-flex justify-content-between mb-2">
                  <span>HTML5 & CSS3</span>
                  <span>95%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} data-percentage="95"></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <div className="skill-info d-flex justify-content-between mb-2">
                  <span>JavaScript</span>
                  <span>90%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} data-percentage="90"></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <div className="skill-info d-flex justify-content-between mb-2">
                  <span>React.js</span>
                  <span>85%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} data-percentage="85"></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <div className="skill-info d-flex justify-content-between mb-2">
                  <span>Bootstrap & Tailwind</span>
                  <span>90%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} data-percentage="90"></div>
                </div>
              </div>
            </div>
            
            {/* Backend Skills */}
            <div className="col-lg-6 mb-5">
              <h4 className="mb-4">Backend Development</h4>
              <div className="skill-item mb-4">
                <div className="skill-info d-flex justify-content-between mb-2">
                  <span>Node.js</span>
                  <span>80%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} data-percentage="80"></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <div className="skill-info d-flex justify-content-between mb-2">
                  <span>Python</span>
                  <span>75%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} data-percentage="75"></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <div className="skill-info d-flex justify-content-between mb-2">
                  <span>Database (SQL/NoSQL)</span>
                  <span>85%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} data-percentage="85"></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <div className="skill-info d-flex justify-content-between mb-2">
                  <span>API Development</span>
                  <span>88%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} data-percentage="88"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="row">
            <div className="col-12 mb-4">
              <h4 className="text-center mb-4">Tools & Technologies</h4>
              <div className="tools-grid">
                <span className="tool-badge">Git & GitHub</span>
                <span className="tool-badge">Docker</span>
                <span className="tool-badge">AWS</span>
                <span className="tool-badge">MongoDB</span>
                <span className="tool-badge">PostgreSQL</span>
                <span className="tool-badge">Redis</span>
                <span className="tool-badge">Webpack</span>
                <span className="tool-badge">Jest</span>
                <span className="tool-badge">Figma</span>
                <span className="tool-badge">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">My Projects</h2>
              <p className="section-subtitle">Recent work and achievements</p>
            </div>
          </div>
          
          {/* Project Filter */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <div className="project-filters">
                <button className="filter-btn active" data-filter="*">All Projects</button>
                <button className="filter-btn" data-filter=".web-app">Web Apps</button>
                <button className="filter-btn" data-filter=".mobile">Mobile</button>
                <button className="filter-btn" data-filter=".api">API</button>
              </div>
            </div>
          </div>
          
          <div className="row projects-grid">
            {/* Project 1 */}
            <div className="col-lg-4 col-md-6 mb-4 project-item web-app">
              <div className="project-card">
                <div className="project-image">
                  <img src="https://storage.googleapis.com/oi-image-gen-results/cm41cklk1000c0c8fh37rj6gm/cm41cklkw000i0c8fb6y1b2rw/image.png" alt="E-commerce Dashboard - Modern web application interface" className="img-fluid" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href="#" className="btn btn-light btn-sm me-2">Live Demo</a>
                      <a href="#" className="btn btn-outline-light btn-sm">GitHub</a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h5>E-Commerce Dashboard</h5>
                  <p>Full-stack e-commerce platform with admin dashboard, user authentication, payment integration, and real-time analytics.</p>
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">MongoDB</span>
                    <span className="tech-tag">Stripe</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="col-lg-4 col-md-6 mb-4 project-item web-app">
              <div className="project-card">
                <div className="project-image">
                  <img src="https://storage.googleapis.com/oi-image-gen-results/cm41cklk1000c0c8fh37rj6gm/cm41cklky000k0c8f5d6ug7hr/image.png" alt="Task Management App - Collaborative project management interface" className="img-fluid" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href="#" className="btn btn-light btn-sm me-2">Live Demo</a>
                      <a href="#" className="btn btn-outline-light btn-sm">GitHub</a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h5>Task Management App</h5>
                  <p>Collaborative task management tool with drag-and-drop functionality, team chat, and progress tracking.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Vue.js</span>
                    <span className="tech-tag">Express</span>
                    <span className="tech-tag">Socket.io</span>
                    <span className="tech-tag">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="col-lg-4 col-md-6 mb-4 project-item mobile">
              <div className="project-card">
                <div className="project-image">
                  <img src="https://storage.googleapis.com/oi-image-gen-results/cm41cklk1000c0c8fh37rj6gm/cm41cklkz000m0c8f5j8s1w11/image.png" alt="Weather App - Mobile application showing weather forecasts and conditions" className="img-fluid" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href="#" className="btn btn-light btn-sm me-2">Live Demo</a>
                      <a href="#" className="btn btn-outline-light btn-sm">GitHub</a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h5>Weather Forecast App</h5>
                  <p>Responsive weather application with geolocation, 7-day forecasts, and interactive weather maps.</p>
                  <div className="project-tech">
                    <span className="tech-tag">React Native</span>
                    <span className="tech-tag">Weather API</span>
                    <span className="tech-tag">Maps API</span>
                    <span className="tech-tag">Redux</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 4 */}
            <div className="col-lg-4 col-md-6 mb-4 project-item api">
              <div className="project-card">
                <div className="project-image">
                  <img src="https://storage.googleapis.com/oi-image-gen-results/cm41cklk1000c0c8fh37rj6gm/cm41ckll1000o0c8ff8qkr3ct/image.png" alt="REST API Documentation - Professional API documentation interface" className="img-fluid" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href="#" className="btn btn-light btn-sm me-2">Documentation</a>
                      <a href="#" className="btn btn-outline-light btn-sm">GitHub</a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h5>RESTful API Service</h5>
                  <p>Scalable REST API with JWT authentication, rate limiting, and comprehensive documentation.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Express</span>
                    <span className="tech-tag">JWT</span>
                    <span className="tech-tag">Swagger</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 5 */}
            <div className="col-lg-4 col-md-6 mb-4 project-item web-app">
              <div className="project-card">
                <div className="project-image">
                  <img src="https://storage.googleapis.com/oi-image-gen-results/cm41cklk1000c0c8fh37rj6gm/cm41ckll3000q0c8f29g2hvwf/image.png" alt="Social Media Platform - Modern social networking interface" className="img-fluid" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href="#" className="btn btn-light btn-sm me-2">Live Demo</a>
                      <a href="#" className="btn btn-outline-light btn-sm">GitHub</a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h5>Social Media Platform</h5>
                  <p>Full-featured social platform with posts, comments, real-time messaging, and user profiles.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Angular</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">WebRTC</span>
                    <span className="tech-tag">Cloud Storage</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 6 */}
            <div className="col-lg-4 col-md-6 mb-4 project-item mobile">
              <div className="project-card">
                <div className="project-image">
                  <img src="https://storage.googleapis.com/oi-image-gen-results/cm41cklk1000c0c8fh37rj6gm/cm41ckll5000s0c8f6m6wqh9l/image.png" alt="Fitness Tracker App - Mobile fitness application interface" className="img-fluid" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href="#" className="btn btn-light btn-sm me-2">Live Demo</a>
                      <a href="#" className="btn btn-outline-light btn-sm">GitHub</a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h5>Fitness Tracker</h5>
                  <p>Mobile fitness app with workout tracking, progress analytics, and personalized training plans.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Flutter</span>
                    <span className="tech-tag">Dart</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">Health API</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title text-light">Get In Touch</h2>
              <p className="section-subtitle text-light">Let&apos;s work together on your next project</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form id="contactForm" className="contact-form">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input type="text" className="form-control" id="name" name="name" required />
                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input type="email" className="form-control" id="email" name="email" required />
                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-4">
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <input type="text" className="form-control" id="subject" name="subject" required />
                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-4">
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Message *</label>
                      <textarea className="form-control" id="message" name="message" rows={6} required></textarea>
                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary btn-lg">
                      <span className="btn-text">Send Message</span>
                      <span className="btn-loading d-none">Sending...</span>
                    </button>
                  </div>
                </div>
              </form>
              
              {/* Success/Error Messages */}
              <div id="form-messages" className="mt-4"></div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="row mt-5">
            <div className="col-lg-4 text-center mb-4">
              <div className="contact-item">
                <div className="contact-icon mb-3">
                  <div className="icon-circle">
                    📧
                  </div>
                </div>
                <h5>Email</h5>
                <p>john.doe@example.com</p>
              </div>
            </div>
            <div className="col-lg-4 text-center mb-4">
              <div className="contact-item">
                <div className="contact-icon mb-3">
                  <div className="icon-circle">
                    📱
                  </div>
                </div>
                <h5>Phone</h5>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="col-lg-4 text-center mb-4">
              <div className="contact-item">
                <div className="contact-icon mb-3">
                  <div className="icon-circle">
                    📍
                  </div>
                </div>
                <h5>Location</h5>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-black text-light py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
              <p className="mb-0">&copy; 2024 John Doe. All rights reserved.</p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <div className="social-links">
                <a href="https://linkedin.com/in/johndoe" className="social-link me-3" target="_blank" rel="noopener">LinkedIn</a>
                <a href="https://github.com/johndoe" className="social-link me-3" target="_blank" rel="noopener">GitHub</a>
                <a href="https://twitter.com/johndoe" className="social-link me-3" target="_blank" rel="noopener">Twitter</a>
                <a href="mailto:john.doe@example.com" className="social-link">Email</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}