import React from "react";
import TweetContext from "../Contexts/TweetContext";
import { Container, Row, Col, Stack, Card } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <TweetContext.Consumer>
        {({ tweet }) => {
          return 
            <div>
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
            </div>
        }}
      </TweetContext.Consumer>
    </>
  );
};

export default HomePage;
