import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Container fluid id="contact">
        <Container className="contacts">
          <h3>Get In Touch</h3>
          <Row className="contacts_col">
            <Col md={4}>
              <h5>Phone</h5>
              <p>+2348108167305; +2347052169039</p>
            </Col>

            <Col md={4}>
              <h5>Email Me</h5>
              <p>olonilebidominion@gmail.com</p>
            </Col>
            <Col md={4}>
              <h5>Github</h5>
              <p>github.com/dominionolonilebi</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Contact;
