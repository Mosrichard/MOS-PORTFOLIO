import React from 'react';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';

const Projects = () => {
  return (
    <div className="section projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card project-card-with-image">
          <div className="project-image-section">
            <div className="project-title-overlay">
              <h3>File Manager with Cron</h3>
              <p>Automated file management system with scheduled tasks using CRON for efficient file operations</p>
            </div>
          </div>
          <div className="project-content-section">
            <div className="project-skills">
              <span className="skill-tag">Linux</span>
              <span className="skill-tag">Crontab</span>
            </div>
            <a href="https://github.com/Mosrichard/file-manager-crontab" target="_blank" rel="noopener noreferrer" className="github-btn">
              🐙 View on GitHub
            </a>
          </div>
        </div>
        <div className="project-card project-card-with-image">
          <div className="project-image-section">
            <img src={project2Image} alt="Deployment Automation" className="project-image" />
            <div className="project-title-overlay">
              <h3>Deployment Automation using Adhoc Cmds</h3>
              <p>Used Ansible ad-hoc commands to deploy a static web application on multiple AWS EC2 instances with NGINX server.</p>
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
            <a href="https://github.com/Mosrichard/ansible-adhoc-deployment-semiautomation" target="_blank" rel="noopener noreferrer" className="github-btn">
              🐙 View on GitHub
            </a>
          </div>
        </div>
        <div className="project-card project-card-with-image">
          <div className="project-image-section">
            <img src={project3Image} alt="Automated Static App Deployment" className="project-image" />
            <div className="project-title-overlay">
              <h3>Automated Static App Deployment with Ansible</h3>
              <p>Used Ansible playbook to automate the deployment of a static web application on a target node with NGINX server.</p>
            </div>
          </div>
          <div className="project-content-section">
            <div className="project-skills">
              <span className="skill-tag">Ansible</span>
              <span className="skill-tag">Adhoc-cmds</span>
              <span className="skill-tag">Ans-playbook</span>
              <span className="skill-tag">YAML</span>
              <span className="skill-tag">Linux</span>
              <span className="skill-tag">Nginx</span>
              <span className="skill-tag">AWS (EC2)</span>
              <span className="skill-tag">SSH</span>
            </div>
            <a href="https://github.com/Mosrichard/Deployment-automation-using-ansible-playbook" target="_blank" rel="noopener noreferrer" className="github-btn">
              🐙 View on GitHub
            </a>
          </div>
        </div>
        <div className="project-card project-card-with-image">
          <div className="project-image-section">
            <div className="project-title-overlay">
              <h3>Cloud Infrastructure</h3>
              <p>Multi-environment AWS infrastructure using Terraform and monitoring</p>
            </div>
          </div>
          <div className="project-content-section">
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
    </div>
  );
};

export default Projects;