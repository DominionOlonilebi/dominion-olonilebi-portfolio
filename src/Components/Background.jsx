import React from "react";
import { Button, Col, Container, Placeholder, Row } from "react-bootstrap";
import MyTyped from "./MyTyped";
const Background = () => {
  return (
    <div>
      <Container fluid className="homes">
        <Container id="home">
          <Row>
            <Col md={6} className="mt-3">
              <h1 className="fs-1 mb-2">
                Hi, I'm <span>Dominion Olonilebi</span>
              </h1>
              <h4>
                <MyTyped className="typed" />
              </h4>
              <p>
                with experience in creating visually appealing, functional
                <br /> and user-friendly websites using
              </p>
              <Placeholder as="p" animation="wave">
                <h6>. HTML . CSS . JavaScript . Bootstrap . ReactJs</h6>
              </Placeholder>

              <div className="homes_btn">
                <Button className="hire_btn">
                  <a href="mailto:olonilebidominion@gmail.com">Hire Me</a>
                </Button>
                <Button className="mx-3 get_btn">
                  <a href="Images/Dominion-Olonilebi-Resume.pdf" download="">
                    Download CV
                  </a>
                </Button>
              </div>
            </Col>
            <Col md={6} className="">
              <img src="Images/laptop-5.png" alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Background;
