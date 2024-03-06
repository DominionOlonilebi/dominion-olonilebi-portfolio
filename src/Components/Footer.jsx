import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container fluid id="footers">
        <Row>
          <Col>
            <h6 className="pb-4">
              Copyright &copy; 2024. Designed by Dominion
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
