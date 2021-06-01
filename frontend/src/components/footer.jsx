import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col className="text-center">
              <span>Copyright &copy; Mern-Ecommerce</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default footer;
