import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
const Home = lazy(() => import('./components/Home'));
const Projects = lazy(() => import('./components/Projects'));

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem('activeSection') || 'home';
  });
  // Removed floating icons for better performance

  // Save active section to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  const renderSection = () => {
    switch(activeSection) {
      case 'projects': return <Projects />;
      default: return <Home />;
    }
  };

  return (
    <div className="app">

      
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('home'); }}>Home</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('projects'); }}>Projects</a>
        </div>
      </nav>

      <div className="main-content">
        <Suspense fallback={<div>Loading...</div>}>
          {renderSection()}
        </Suspense>
      </div>
      <Analytics />
    </div>
  );
}

export default App;