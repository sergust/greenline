import "./App.css";
import { Switch, Route } from "react-router-dom";
import Feed from "./pages/Feed/Feed.component";
import SignIn from "./pages/SignIn/SignIn.component";
import { Container, Row } from "react-bootstrap";
import Logo from "./components/Logo/Logo.component";
import Authentication from "./components/Authentication/Authentication.component";
import Menu from "./components/Menu/Menu.component";
import React from "react";

function App() {
  return (
    <div className="App">
      <div>
        <Container>
          <Row className="header">
            <Logo />
            <Authentication />
          </Row>
          <Row>
            <Menu />
          </Row>
          <Row>
            <Switch>
              <Route exact path="/" component={Feed} />
              <Route exact path="/signin" component={SignIn} />
            </Switch>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
