import React from 'react';
import './Contact.css';

function Contact() {
  const contactInfo = [
    {
      title: 'Email',
      detail: 'joegon806@gmail.com',
      link: 'mailto:joegon806@gmail.com',
      icon: '📧'
    },
    {
      title: 'Phone',
      detail: '+1 (551) 283-2941',
      link: 'tel:+15512832941',
      icon: '📱'
    },
    {
      title: 'Location',
      detail: 'Hackensack, New Jersey',
      link: null,
      icon: '📍'
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="info-title">Contact Information</h3>
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <span className="contact-icon">{info.icon}</span>
              {info.link ? (
                <span><strong>{info.title}:</strong> <a href={info.link} className="contact-value">{info.detail}</a></span>
              ) : (
                <span><strong>{info.title}:</strong> <span className="contact-value">{info.detail}</span></span>
              )}
            </div>
          ))}
          
          <div className="social-media">
            <h4 className="social-title">Follow Me</h4>
            <div className="social-links">
              <a href="https://github.com/joegon806" className="social-link github">
                <span className="social-icon">🐙</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/joseph-gonzales-099985319" className="social-link linkedin">
                <span className="social-icon">💼</span> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;