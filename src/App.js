import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeNav, setActiveNav] = useState('home');

  // Projects Data - Organized by Domain
  const allProjects = [
    {
      id: 1,
      title: "N-Queens Visualization System",
      category: "Algorithms",
      tech: "C++, raylib",
      desc: "Developed an interactive visualization system to solve the N-Queens problem using the Min-Conflicts heuristic.",
      role: "Developer",
      outcome: "Achieved efficient solutions for large N values and demonstrated real-time conflict resolution"
    },
    {
      id: 2,
      title: "Student Attendance Management System",
      category: "Database",
      tech: "SQL, DBMS",
      desc: "Designed and implemented a structured database system for managing student attendance records.",
      role: "Designer & Developer",
      outcome: "Enabled efficient data storage, retrieval, and query optimization"
    },
    {
      id: 3,
      title: "Learning Management System (LMS)",
      category: "OOP",
      tech: "C++ (OOP Concepts)",
      desc: "Developed an LMS application implementing core OOP principles such as encapsulation, inheritance, and modular design.",
      role: "Developer",
      outcome: "Demonstrated strong understanding of object-oriented design and system structuring"
    },
    {
      id: 4,
      title: "Airport Management System",
      category: "Programming",
      tech: "C++",
      desc: "Built a console-based system to manage airport operations including scheduling and record handling.",
      role: "Developer",
      outcome: "Strengthened programming logic and problem-solving skills"
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "Web",
      tech: "React, Tailwind CSS",
      desc: "Developed a personal portfolio website to showcase projects and skills.",
      role: "Full Stack Developer",
      outcome: "Professional showcase of technical expertise and accomplishments"
    },
    {
      id: 6,
      title: "Todo List Application",
      category: "Web",
      tech: "JavaScript / React",
      desc: "Built a task management application with dynamic UI and CRUD functionality.",
      role: "Full Stack Developer",
      outcome: "Functional task management system with intuitive user interface"
    },
    {
      id: 7,
      title: "CRUD Operations System",
      category: "Web",
      tech: "Node.js, Express, MongoDB",
      desc: "Implemented full CRUD functionality with backend integration.",
      role: "Backend Developer",
      outcome: "Complete backend solution with database integration"
    },
    {
      id: 8,
      title: "Django Web Application",
      category: "Web",
      tech: "Django, Python",
      desc: "Developed a backend-driven web application using Django framework.",
      role: "Backend Developer",
      outcome: "Robust backend application demonstrating Django mastery"
    },
    {
      id: 9,
      title: "Mood-Based Music Recommender",
      category: "AI",
      tech: "React, Node.js, Gemini API, Spotify API",
      desc: "Built an AI-powered system that analyzes user mood using LLMs and recommends music accordingly.",
      role: "Full Stack Developer",
      outcome: "Demonstrated integration of AI APIs with full-stack applications"
    },
    {
      id: 10,
      title: "Ludo Board UI",
      category: "Web",
      tech: "HTML, CSS",
      desc: "Designed a structured Ludo board layout using tables and styling techniques.",
      role: "Frontend Developer",
      outcome: "Clean, structured UI design demonstrating web fundamentals"
    },
    {
      id: 11,
      title: "Titanic Survival Prediction Dashboard",
      category: "ML",
      tech: "Python, Pandas, Scikit-learn",
      desc: "Developed a machine learning model using logistic regression to predict passenger survival.",
      role: "ML Developer",
      outcome: "Applied preprocessing, feature engineering, and evaluation techniques"
    },
    {
      id: 12,
      title: "Stock Price Prediction System",
      category: "ML",
      tech: "Python, LSTM",
      desc: "Built a predictive model for stock price trends using time-series data.",
      role: "ML Developer",
      outcome: "Gained experience in deep learning and sequential data modeling"
    }
  ];

  // Skills Data
  const skills = {
    'Development': ['React.js', 'Node.js', 'Express.js', 'Django', 'JavaScript (ES6+)', 'C++', 'Python'],
    'Data Science & AI': ['Scikit-learn', 'Pandas', 'LLM Integration (Gemini API)', 'Sentiment Analysis', 'Time Series Prediction (LSTM)'],
    'Core Concepts': ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Operating Systems'],
    'Tools & Technologies': ['Git & GitHub', 'VS Code', 'Vite', 'raylib'],
    'Soft Skills': ['Problem Solving', 'Analytical Thinking', 'Leadership', 'Time Management', 'Punctuality']
  };

  // Experience Data
  const experiences = [
    {
      title: "Intern",
      company: "TechCognify",
      period: "Current",
      description: "Working on real-world software development tasks and gaining hands-on industry experience",
      responsibilities: [
        "Working on real-world software development tasks",
        "Collaborating with teams on technical solutions",
        "Gaining hands-on experience in modern development workflows",
        "Exposure to datasets and practical implementation"
      ]
    },
    {
      title: "Event Manager",
      company: "InsaafDar",
      period: "2025",
      description: "Managed events, meetings, and coordination activities",
      responsibilities: [
        "Managed events, meetings, and coordination activities",
        "Organized schedules and communication with team members",
        "Demonstrated leadership and organizational skills"
      ]
    }
  ];

  // Education Data
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Bahria University",
      score: "CGPA 3.43/4.0",
      details: "Currently pursuing with strong academic performance in core CS subjects.",
      highlights: "Algorithms, OOP, DBMS, software engineering, parallel computing"
    },
    {
      degree: "FSc Pre-Medical",
      institution: "Linz College",
      score: "91% | Head Boy",
      details: "Completed FSc Pre-Medical with strong results and leadership recognition.",
      highlights: "Head Boy, Pre-Medical track, strong academic performance"
    },
    {
      degree: "Matric Science",
      institution: "Al Abbas School and College",
      score: "95% | 16th Position in Board",
      details: "Completed matriculation with distinction and board-level placement.",
      highlights: "16th position in board, excellent foundation in science"
    }
  ];

  const heroHighlights = [
    { label: 'Full-Stack', value: 'React, Node, Django' },
    { label: 'AI + ML', value: 'Gemini, LSTM, Scikit-learn' },
    { label: 'Core CS', value: 'DSA, OOP, DBMS' }
  ];

  const quickActions = [
    { label: 'View Projects', target: 'projects' },
    { label: 'Explore Skills', target: 'skills' },
    { label: 'See Experience', target: 'experience' }
  ];

  // Achievements
  const achievements = [
    { icon: "🎓", title: "CGPA 3.43", desc: "Top-performing student recognition" },
    { icon: "🥇", title: "IEEE Member", desc: "IEEE Student Branch – Bahria University" },
    { icon: "❤️", title: "Community Service", desc: "Participated in Ramzan Hadia Aftar Drive" },
    { icon: "🤖", title: "AI Development", desc: "Experience in AI-based application development" }
  ];

  const filteredProjects = activeTab === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeTab);

  const categories = ['all', 'Algorithms', 'Database', 'OOP', 'Programming', 'Web', 'AI', 'ML'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(sectionId);
    }
  };

  return (
    <div className="portfolio-container">
      {/* ============ NAVBAR ============ */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-brand">
            <h1 className="brand-name"> Muhammad Hassan Raza</h1>
            <p className="brand-subtitle">Computer Science Student | Software Developer</p>
          </div>
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className={activeNav === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className={activeNav === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }} className={activeNav === 'education' ? 'active' : ''}>Education</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className={activeNav === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className={activeNav === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className={activeNav === 'experience' ? 'active' : ''}>Experience</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className={activeNav === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ============ HERO SECTION ============ */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-copy">
            <h1 className="hero-title">Welcome to My Portfolio</h1>
            <p className="hero-subtitle">Computer Science Student | Full-Stack Developer | AI Enthusiast</p>
            <p className="hero-description">
              Building efficient, scalable, and user-centric applications by combining strong programming fundamentals with modern technologies.
            </p>
            <div className="hero-highlights">
              {heroHighlights.map((item) => (
                <div key={item.label} className="hero-highlight-card">
                  <span className="hero-highlight-label">{item.label}</span>
                  <span className="hero-highlight-value">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <button className="cta-button" onClick={() => scrollToSection('contact')}>Get In Touch</button>
              <button className="secondary-cta" onClick={() => scrollToSection('projects')}>View Work</button>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-header">Profile Snapshot</div>
            <div className="hero-panel-stats">
              <div className="hero-stat">
                <span className="hero-stat-value">12+</span>
                <span className="hero-stat-label">Projects</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">3</span>
                <span className="hero-stat-label">Education Stages</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">2</span>
                <span className="hero-stat-label">Current Domains</span>
              </div>
            </div>
          
          </div>
        </div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <div className="about-content">
            <p className="about-text">
              I am a Computer Science student with a strong interest in software development, algorithms, and intelligent systems. I focus on building efficient, scalable, and user-centric applications by combining strong programming fundamentals with modern technologies.
            </p>
            <p className="about-text">
              Currently, I am gaining practical industry experience as an intern at TechCognify while working on academic, full-stack, and AI-based projects. My goal is to become a proficient software engineer with expertise in system design and intelligent application development.
            </p>
            <p className="about-text">
              With hands-on experience across multiple domains including web development, machine learning, and algorithm design, I am passionate about solving complex problems and creating innovative solutions that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* ============ EDUCATION SECTION ============ */}
      <section id="education" className="education-section">
        <div className="section-container">
          <h2 className="section-title">Education & Background</h2>
          <div className="section-divider"></div>
          <div className="education-grid">
            {education.map((edu, idx) => (
              <div key={idx} className="education-card">
                <div className="education-header">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                </div>
                <div className="education-score">
                  <span className="score-label">Highlight:</span>
                  <span className="score-value">{edu.score}</span>
                </div>
                <p className="education-details">{edu.details}</p>
                <div className="education-subjects">
                  <h4>Highlights:</h4>
                  <p>{edu.highlights}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SKILLS SECTION ============ */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="skill-category">
                <h3 className="skill-category-title">{category}</h3>
                <div className="skill-tags">
                  {items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJECTS SECTION ============ */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          
          <div className="project-filters">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <p className="project-tech">Tech: {project.tech}</p>
                <p className="project-desc">{project.desc}</p>
                <div className="project-footer">
                  <p><strong>Role:</strong> {project.role}</p>
                  <p><strong>Outcome:</strong> {project.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPERIENCE SECTION ============ */}
      <section id="experience" className="experience-section">
        <div className="section-container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-divider"></div>
          <div className="experience-timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-list">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACHIEVEMENTS SECTION ============ */}
      <section className="achievements-section">
        <div className="section-container">
          <h2 className="section-title">Achievements & Recognition</h2>
          <div className="section-divider"></div>
          <div className="achievements-grid">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-desc">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Contact & Connect</h2>
          <div className="section-divider"></div>
          <div className="contact-content">
            <div className="contact-info-grid">
              <div className="contact-info-card">
                <span className="contact-icon">✉️</span>
                <h3>Email</h3>
                <a href="mailto:razamh555@gmail.com">razamh555@gmail.com</a>
              </div>
              <div className="contact-info-card">
                <span className="contact-icon">💼</span>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/mhasanraza" target="_blank" rel="noopener noreferrer">Visit Profile</a>
              </div>
              <div className="contact-info-card">
                <span className="contact-icon">🐙</span>
                <h3>GitHub</h3>
                <a href="https://github.com/hassraza" target="_blank" rel="noopener noreferrer">View Projects</a>
              </div>
            </div>
            <div className="contact-actions">
              {quickActions.map((action) => (
                <button key={action.label} className="contact-action-btn" onClick={() => scrollToSection(action.target)}>
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <p>&copy; 2026 Hassan Raza. All rights reserved.</p>
        <p>Built with React & Tailwind CSS | Crafted with ❤️</p>
      </footer>
    </div>
  );
};

export default App;
