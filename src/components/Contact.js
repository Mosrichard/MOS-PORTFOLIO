import React from 'react';

const Contact = () => {
  return (
    <div className="section contact-section">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-item">
          <span className="contact-icon">📧</span>
          <span>mos.richard@email.com</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">💼</span>
          <span>LinkedIn: /in/mosrichard</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">🐙</span>
          <span>GitHub: /mosrichard</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;