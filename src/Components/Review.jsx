import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Review = () => {
  return (
    <div>
      <Container fluid id="review">
        <Container className="review_container">
          <h2>Client Review</h2>
          <p style={{ textAlign: "center", color: "rgb(253, 227, 193)" }}>
            I have had opportunities to work with potential clients and several
            personal project work as seen in my github handle. <br />
            Some of my project work includes
          </p>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={7} className="review_col">
              <img
                src="Images/testimonial-3.jpg"
                alt=""
                width={70}
                height={70}
                className="rounded-circle"
              />
              <h6>Adeola Kabiesi</h6>
              <p>
                <i>
                  Extremely professional and fast service. Dominion was a real
                  pleasure to work with and we look forward to working with her
                  again. She's definitely the kind of designer that you can
                  trust with any project from A-Z.
                </i>{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Review;
