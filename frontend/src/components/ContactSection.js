import React, { useState } from 'react';
import './ContactSection.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: 'consultation',
    message: ''
  });
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [formRef, formVisible] = useScrollAnimation({ threshold: 0.1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      serviceType: 'consultation',
      message: ''
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div 
        className={`contact-header scroll-animate fade-up ${headerVisible ? 'visible' : ''}`}
        ref={headerRef}
      >
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">Have questions about PneumoScan? We're here to help!</p>
      </div>

      <div 
        className={`contact-container scroll-animate fade-up ${formVisible ? 'visible' : ''}`}
        ref={formRef}
      >
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 234 567 8910"
              />
            </div>
          </div>

          <div className="form-group service-group">
            <label>What type of inquiry do you have?</label>
            <div className="radio-options">
              <label className="radio-label">
                <input
                  type="radio"
                  name="serviceType"
                  value="consultation"
                  checked={formData.serviceType === 'consultation'}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                <span>Consultation</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="serviceType"
                  value="demo"
                  checked={formData.serviceType === 'demo'}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                <span>Request Demo</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="serviceType"
                  value="partnership"
                  checked={formData.serviceType === 'partnership'}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                <span>Partnership</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="serviceType"
                  value="support"
                  checked={formData.serviceType === 'support'}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                <span>Support</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your inquiry or how we can help with pneumonia detection..."
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
