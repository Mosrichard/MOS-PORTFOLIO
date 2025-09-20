import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem('activeSection') || 'home';
  });
  const [floatingIcons, setFloatingIcons] = useState([]);

  const devopsIcons = ['🐳', '☁️', '🔧', '🛠️', '⚙️'];

  useEffect(() => {
    const createFloatingIcon = () => {
      const icon = devopsIcons[Math.floor(Math.random() * devopsIcons.length)];
      const id = Date.now() + Math.random();
      const top = Math.random() * 70 + 15;
      const left = Math.random() * 80 + 10;
      
      setFloatingIcons(prev => [...prev, { id, icon, top, left }]);
      
      setTimeout(() => {
        setFloatingIcons(prev => prev.filter(item => item.id !== id));
      }, 4000);
    };

    const interval = setInterval(createFloatingIcon, 2500);
    return () => clearInterval(interval);
  }, [devopsIcons]);

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
      {floatingIcons.map(({ id, icon, top, left }) => (
        <div
          key={id}
          className="floating-icon"
          style={{
            top: `${top}%`,
            left: `${left}%`
          }}
        >
          {icon}
        </div>
      ))}
      
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('home'); }}>Home</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('projects'); }}>Projects</a>
        </div>
      </nav>

      <div className="main-content">
        {renderSection()}
      </div>
      <Analytics />
    </div>
  );
}

export default App;