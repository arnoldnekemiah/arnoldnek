import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './contact.css';

const contactConfig = {
  YOUR_EMAIL: 'arnoldnek@gmail.com',
  YOUR_FONE: '+256700388074',
  description:
  'I\'m always interested in hearing about new projects, so if you\'d like to chat please get in touch.',
  YOUR_SERVICE_ID: 'service_id',
  YOUR_TEMPLATE_ID: 'template_id',
  YOUR_USER_ID: 'user_id',
};

export default function ContactUs() {
  return (
    <Container className="container-contact">
      <Row className="mb-5 mt-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Me</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="12" className="d-flex">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>
              {' '}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>{contactConfig.YOUR_EMAIL}</a>
              <br />
              <br />
              {contactConfig.YOUR_FONE ? (
                <p>
                  <strong>Phone:</strong>
                  {' '}
                  {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ''
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100" action="https://formspree.io/f/xgebykvy" method="post">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              />
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn btn-primary ac_btn" type="submit">
                    Send Message
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
