import { useState, useEffect } from 'react';
import './App.css';
import aboutMeImg from './assets/images/about-me.jpeg';
import projKoolageImg from './assets/images/proj_koolage.png';
import projSpectreImg from './assets/images/proj_spectre.png';
import projVulnImg from './assets/images/proj_vuln.png';

function Navbar() {
  return (
    <nav className="navbar glass-panel">
      <div className="nav-container">
        <a href="#" className="logo">&lt;Shivam Raj /&gt;</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ['Cyber Security Professional', 'Ethical Hacker', 'Full-Stack Developer'];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => { clearInterval(ticker) };
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % titles.length;
    let fullText = titles[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(1000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section className="section hero-section" id="home">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <h5>Hello, World!</h5>
          <h1 className="hero-title">I'm <span className="highlight">Shivam Raj</span></h1>
          <h2 className="hero-subtitle">
            <span className="typing-text">{text}</span>
          </h2>
          <p className="hero-desc">
            Bridging the gap between robust security and scalable web architecture. 
            I build systems that perform beautifully and defend rigorously.
          </p>
          <div className="hero-buttons">
            <a href="https://koolage.online" className="cyber-btn">View Koolage</a>
            <a href="https://github.com/ShivamRaj8" className="cyber-btn cyber-btn-outline">GitHub</a>
          </div>
        </div>
        <div className="hero-image animate-fade-in">
          <div className="image-wrapper glass-panel">
            <img src={aboutMeImg} alt="Shivam Raj" />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="cyber-heading">About Me</h2>
        <div className="about-content glass-panel">
          <div className="about-text">
            <p>
              Detail-oriented <strong>Cyber Security Professional</strong> and Ethical Hacker with expertise in identifying and mitigating vulnerabilities across complex network architectures. Proficient in performing rigorous Penetration Testing using Kali Linux, Metasploit, and Burp Suite.
            </p>
            <p>
              Dedicated to proactively defending cloud infrastructure (AWS) and ensuring compliance with OWASP Top 10 standards. I also love to design and build scalable, full-stack web applications using modern tech like React and Node.js.
            </p>
            <ul className="about-list">
              <li><strong>Profile:</strong> Cyber Security & Web Development</li>
              <li><strong>Education:</strong> Diploma in Cyber Security & Ethical Hacking</li>
              <li><strong>Address:</strong> Greater Noida, UP, India</li>
              <li><strong>Interests:</strong> Bug Bounty Hunting, CTF Challenges, Open-Source</li>
            </ul>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <h3>8</h3>
              <p>Hackathons Participated</p>
            </div>
            <div className="stat-box">
              <h3>15</h3>
              <p>Projects</p>
            </div>
            <div className="stat-box">
              <h3>25+</h3>
              <p>Bugs Found</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { name: 'Penetration Testing (Kali, Burp Suite)', level: 90 },
    { name: 'Web Development (React, Supabase)', level: 85 },
    { name: 'Network Security (IDS/IPS, SIEM)', level: 85 },
    { name: 'Cloud Security (AWS)', level: 80 },
    { name: 'UI/UX Designing', level: 75 }
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <h2 className="cyber-heading">Technical Arsenal</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card glass-panel" key={index}>
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Koolage - Full Stack EdTech Platform',
      desc: 'Built a responsive platform for colleges with an AI assistant using React, Vite, and Supabase backend.',
      link: 'https://koolage.online',
      image: projKoolageImg
    },
    {
      title: 'SpectreOS - Custom Linux Distro',
      desc: 'Designed a custom Linux distribution optimized for penetration testing and security research.',
      link: 'https://github.com/ShivamRaj8',
      image: projSpectreImg
    },
    {
      title: 'Web Vulnerability Research',
      desc: 'Identified and documented critical vulnerabilities including Parameter Tampering to secure web applications.',
      link: 'https://github.com/ShivamRaj8',
      image: projVulnImg
    }
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <h2 className="cyber-heading">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div className="project-card glass-panel" key={idx}>
              <div className="project-img-wrapper">
                <img src={proj.image} alt={proj.title} />
              </div>
              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <a href={proj.link} className="cyber-btn cyber-btn-outline" target="_blank" rel="noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <h2 className="cyber-heading">Experience & Education</h2>
        <div className="timeline glass-panel">
          
          <div className="timeline-item">
            <div className="timeline-date">Dec 2025 - Apr 2026</div>
            <div className="timeline-content">
              <h3>Backend Executive</h3>
              <h4>ATD Finance Pvt Ltd, Noida</h4>
              <p>Managed backend data operations and ensured seamless processing of financial records. Collaborated with the technical team to resolve operational bottlenecks and secure systems.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Jan 2025 - Jan 2026</div>
            <div className="timeline-content">
              <h3>Diploma in Cyber Security & Ethical Hacking</h3>
              <h4>Boostan Institute of Analytics</h4>
              <p>Rigorous training in IT, penetration testing, network security, and vulnerability assessment.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <h2 className="cyber-heading">Initiate Handshake</h2>
        <div className="contact-card glass-panel text-center">
          <h3>Ready to build or secure your next project?</h3>
          <p>Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <a href="mailto:shivamrajsingh615@gmail.com" className="cyber-btn">Say Hello</a>
          <div className="social-links mt-4">
            <a href="https://github.com/ShivamRaj8">GitHub</a>
            <a href="https://www.linkedin.com/in/shivam-raj-76225025b">LinkedIn</a>
          </div>
        </div>
      </div>
      <footer className="footer text-center">
        <p>&copy; {new Date().getFullYear()} Shivam Raj. Built with React & Vite.</p>
      </footer>
    </section>
  );
}

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
