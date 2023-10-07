import React from "react";
import { Container, Row, Col, Stack, Card } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <Stack direction="vertical" gap={3}></Stack>
          </Col>
          <Col md={6}>
            <Stack direction="vertical" gap={3}></Stack>
          </Col>
          <Col md={3}>
            <Stack direction="vertical" gap={3}></Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
