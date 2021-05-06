import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const FromContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justyfy-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FromContainer;
