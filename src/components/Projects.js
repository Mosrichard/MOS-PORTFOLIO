import React from 'react';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';
import dockerProject1Image from '../assets/docker-project-1.jpg';
import dockerProject2Image from '../assets/docker-project-2.jpg';

const Projects = () => {
  return (
    <div className="section projects-section">
      <h2>Projects</h2>
      
      {/* Linux Projects */}
      <div className="tech-category">
        <h3 className="tech-title">Linux Projects</h3>
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
              <a href="https://github.com/Mosrichard/adhoc-dep-semiauto" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ansible Projects */}
      <div className="tech-category">
        <h3 className="tech-title">Ansible Projects</h3>
        <div className="projects-grid">
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
                <h3>Fullstack App Deployment Automation using Ansible Roles</h3>
                <p>Automated deployment of a complete fullstack application using structured Ansible roles for scalable infrastructure management</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Ansible</span>
                <span className="skill-tag">Ansible Roles</span>
                <span className="skill-tag">YAML</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Nginx</span>
                <span className="skill-tag">AWS (EC2)</span>
                <span className="skill-tag">SSH</span>
              </div>
              <a href="https://github.com/Mosrichard/fullstack-dep-automation-ansible-roles" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Docker Projects */}
      <div className="tech-category">
        <h3 className="tech-title">Docker Projects</h3>
        <div className="projects-grid">
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <img src={dockerProject1Image} alt="Dockerized Portfolio Image" className="project-image" />
              <div className="project-title-overlay">
                <h3>dockerized-portfolio-image</h3>
                <p>Dockerized a full-stack web application with multi-stage builds and optimized container images for production deployment</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Docker & Containers</span>
                <span className="skill-tag">Dockerfile & Multi-stage Builds</span>
                <span className="skill-tag">NGINX</span>
              </div>
              <a href="https://github.com/Mosrichard/dockerized-portfolio-image" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <img src={dockerProject2Image} alt="MOS Portfolio - Dockerized" className="project-image" />
              <div className="project-title-overlay">
                <h3>MOS Portfolio - Dockerized</h3>
                <p>Implemented Docker Swarm for container orchestration with load balancing and service discovery across multiple nodes</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Docker & Containers</span>
                <span className="skill-tag">Dockerfile & Multi-stage Builds</span>
                <span className="skill-tag">NGINX</span>
                <span className="skill-tag">EC2</span>
                <span className="skill-tag">Docker Hub</span>
              </div>
              <a href="https://github.com/Mosrichard/MOS-PORTFOLIO" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <div className="project-title-overlay">
                <h3>CI/CD Pipeline with Docker</h3>
                <p>Built automated CI/CD pipeline using Docker containers for testing, building, and deploying applications with Jenkins integration</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Automation</span>
              </div>
              <a href="https://github.com/Mosrichard/docker-cicd-pipeline" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <div className="project-title-overlay">
                <h3>Microservices Architecture with Docker</h3>
                <p>Designed and deployed microservices architecture using Docker containers with API gateway and service mesh implementation</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Microservices</span>
                <span className="skill-tag">API Gateway</span>
                <span className="skill-tag">Service Mesh</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">AWS</span>
              </div>
              <a href="https://github.com/Mosrichard/docker-microservices" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;