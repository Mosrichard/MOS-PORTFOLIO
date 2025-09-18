import React from 'react';

const Contact = () => {
  return (
    <div className="section contact-section">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-item">
          <span className="contact-icon">📧</span>
          <span>mosrichard3@gmail.com</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">💼</span>
          <span>LinkedIn: <a href='https://www.linkedin.com/in/mos-richard-1316231a6/'>https://www.linkedin.com/in/mos-richard-1316231a6/</a></span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">🐙</span>
          <span>GitHub: <a href='https://github.com/Mosrichard'>https://github.com/Mosrichard</a></span>
        </div>
      </div>
    </div>
  );
};

export default Contact;