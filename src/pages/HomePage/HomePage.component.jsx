import React from "react";
import "./HomePage.styles.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../../components/Logo/Logo.component";
import Authentication from "../../components/Authentication/Authentication.component";
import Menu from "../../components/Menu/Menu.component";

const HomePage = () => {
  return (
    <div>
      <Container>
        <Row className="header">
          <Logo />
          <Authentication />
        </Row>
        <Row>
          <Menu />
        </Row>
      </Container>
      <Row></Row>
    </div>
  );
};

export default HomePage;
