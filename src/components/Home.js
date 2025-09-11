import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="name">Mos Richard</h1>
        <h2 className="title">Data & Cloud Enthusiast | DevOps in Progress</h2>
        <p className="subtitle">Automating infrastructure and deployments</p>
        
        <div className="journey-compact">
          <div className="journey-step">
            <span className="step-icon">🚀</span>
            <span>Started learning DevOps</span>
          </div>
          <div className="arrow">→</div>
          <div className="journey-step active">
            <span className="step-icon">📊</span>
            <span>Landed as DA</span>
          </div>
          <div className="arrow">→</div>
          <div className="journey-step">
            <span className="step-icon">⚡</span>
            <span>Moving to DevOps roles</span>
          </div>
        </div>
      </div>

      <div className="resume-sections">
        <div className="resume-section">
          <h3>About</h3>
          <p>Aspiring DevOps Engineer skilled in Linux, Docker, Kubernetes, AWS, and automation. Passionate about building scalable infrastructure and streamlining deployments with CI/CD and IaC.</p>
        </div>

        <div className="resume-section">
          <h3>Skills</h3>
          <div className="skills-compact">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">Tableau</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">AWS</span>
            <span className="skill-tag">Kubernetes</span>
            <span className="skill-tag">Power BI</span>
            <span className="skill-tag">Git</span>
          </div>
        </div>

        <div className="resume-section">
          <h3>Contact</h3>
          <div className="contact-compact">
            <a href="mailto:mos.richard@email.com" className="contact-info">📧 mos.richard@email.com</a>
            <a href="https://linkedin.com/in/mosrichard" target="_blank" rel="noopener noreferrer" className="contact-info">💼 LinkedIn: /in/mosrichard</a>
            <a href="https://github.com/mosrichard" target="_blank" rel="noopener noreferrer" className="contact-info">🐙 GitHub: /mosrichard</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;