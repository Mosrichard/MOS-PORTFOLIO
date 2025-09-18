import React from 'react';

const Projects = () => {
  return (
    <div className="section projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Sales Analytics Dashboard</h3>
          <p>Interactive dashboard using Python and Tableau for sales performance analysis</p>
          <a href="https://github.com/Mosrichard/sales-analytics-dashboard" target="_blank" rel="noopener noreferrer" className="github-btn">
            🐙 View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>CI/CD Pipeline</h3>
          <p>Automated deployment pipeline using Docker and Kubernetes</p>
          <a href="https://github.com/Mosrichard/cicd-pipeline" target="_blank" rel="noopener noreferrer" className="github-btn">
            🐙 View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Data ETL Pipeline</h3>
          <p>Scalable data processing pipeline on AWS with Python</p>
          <a href="https://github.com/Mosrichard/data-etl-pipeline" target="_blank" rel="noopener noreferrer" className="github-btn">
            🐙 View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Cloud Infrastructure</h3>
          <p>Multi-environment AWS infrastructure using Terraform and monitoring</p>
          <a href="https://github.com/Mosrichard/cloud-infrastructure" target="_blank" rel="noopener noreferrer" className="github-btn">
            🐙 View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;