import React from 'react';

const Projects = () => {
  return (
    <div className="section projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>File Manager with Cron</h3>
          <p>Automated file management system with scheduled tasks using CRON for efficient file operations</p>
          <div className="project-skills">
            <span className="skill-tag">Linux</span>
            <span className="skill-tag">Crontab</span>
          </div>
          <a href="https://github.com/Mosrichard/file-manager-crontab" target="_blank" rel="noopener noreferrer" className="github-btn">
            🐙 View on GitHub
          </a>
        </div>
        <div className="project-card project-card-with-image">
          <div className="project-image-section">
            <img src="/images/project 2.jpg" alt="Deployment Automation" className="project-image" />
            <div className="project-title-overlay">
              <h3>Deployment Automation using Adhoc Cmds</h3>
              <p>Automated deployment pipeline using Docker and Kubernetes</p>
            </div>
          </div>
          <div className="project-content-section">
            <div className="project-skills">
              <span className="skill-tag">Ansible</span>
              <span className="skill-tag">Adhoc</span>
              <span className="skill-tag">Nginx</span>
              <span className="skill-tag">AWS (EC2)</span>
              <span className="skill-tag">Linux</span>
              <span className="skill-tag">SSH</span>
            </div>
            <a href="https://github.com/Mosrichard/cicd-pipeline" target="_blank" rel="noopener noreferrer" className="github-btn">
              🐙 View on GitHub
            </a>
          </div>
        </div>
        <div className="project-card">
          <h3>Data ETL Pipeline</h3>
          <p>Scalable data processing pipeline on AWS with Python</p>
          <div className="project-skills">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">AWS</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">Apache Airflow</span>
          </div>
          <a href="https://github.com/Mosrichard/data-etl-pipeline" target="_blank" rel="noopener noreferrer" className="github-btn">
            🐙 View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Cloud Infrastructure</h3>
          <p>Multi-environment AWS infrastructure using Terraform and monitoring</p>
          <div className="project-skills">
            <span className="skill-tag">Terraform</span>
            <span className="skill-tag">AWS</span>
            <span className="skill-tag">CloudWatch</span>
            <span className="skill-tag">IAM</span>
          </div>
          <a href="https://github.com/Mosrichard/cloud-infrastructure" target="_blank" rel="noopener noreferrer" className="github-btn">
            🐙 View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;