import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineMail, AiOutlinePhone, AiOutlineSend } from 'react-icons/ai';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Particle from '../Particle';
import './contact.css';

const contactConfig = {
  YOUR_EMAIL: 'arnoldnek@gmail.com',
  YOUR_FONE: '+256700388074',
  description:
    "I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.",
  YOUR_SERVICE_ID: 'service_id',
  YOUR_TEMPLATE_ID: 'template_id',
  YOUR_USER_ID: 'user_id',
};

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact-section">
      <Particle />
      <Container fluid className="contact-container">
        <Container>
          <Row className="contact-header">
            <Col md={12}>
              <h1 className="contact-title">
                Get In
                {' '}
                <span className="purple">Touch</span>
              </h1>
              <p className="contact-subtitle">
                Have a question or want to work together? Drop me a message!
              </p>
            </Col>
          </Row>

          <Row className="contact-content">
            {/* Contact Info Card */}
            <Col md={5} className="contact-info-col">
              <div className="contact-info-card">
                <h3 className="contact-info-title">Contact Information</h3>
                <p className="contact-info-description">
                  {contactConfig.description}
                </p>

                <div className="contact-details">
                  <div className="contact-detail-item">
                    <div className="contact-icon-wrapper">
                      <AiOutlineMail className="contact-icon" />
                    </div>
                    <div className="contact-detail-content">
                      <h4>Email</h4>
                      <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                        {contactConfig.YOUR_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon-wrapper">
                      <AiOutlinePhone className="contact-icon" />
                    </div>
                    <div className="contact-detail-content">
                      <h4>Phone</h4>
                      <a href={`tel:${contactConfig.YOUR_FONE}`}>
                        {contactConfig.YOUR_FONE}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="contact-social">
                  <h4>Connect with me</h4>
                  <div className="contact-social-links">
                    <a
                      href="https://github.com/arnoldnekemiah"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-social-icon"
                      aria-label="Visit my GitHub profile"
                    >
                      <BsGithub />
                    </a>
                    <a
                      href="https://linkedin.com/in/arnoldnek"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-social-icon"
                      aria-label="Visit my LinkedIn profile"
                    >
                      <BsLinkedin />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-social-icon"
                      aria-label="Visit my Twitter profile"
                    >
                      <BsTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            {/* Contact Form */}
            <Col md={7} className="contact-form-col">
              <div className="contact-form-card">
                <h3 className="form-title">Send Me a Message</h3>
                <form
                  className="modern-contact-form"
                  action="https://formspree.io/f/xgebykvy"
                  method="post"
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      Your Name
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Your Email
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Your Message
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        placeholder="Tell me about your project..."
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>

                  <button type="submit" className="submit-button">
                    <AiOutlineSend className="send-icon" />
                    Send Message
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
