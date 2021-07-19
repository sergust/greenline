import "./App.css";
import { Switch, Route } from "react-router-dom";
import Feed from "./pages/Feed/Feed.component";
import SignIn from "./pages/SignIn/SignIn.component";
import SignUp from "./pages/SignUp/SignUp.component";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header/Header.component";
import Menu from "./components/Menu/Menu.component";
import React from "react";

function App() {
  return (
    <div className="App">
      <div>
        <Container>
          <Header />
          <Row>
            <Menu />
          </Row>
          <Row>
            <Switch>
              <Route exact path="/" component={Feed} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
