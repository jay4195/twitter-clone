import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Container from "./styles/Container";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Notification from "./pages/Notifications";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import EastNav from "./components/EastNav";

const Routing = () => {
  return (
    <Router>
      <Nav/>
      <Container>
        <Switch>
          <Route path="/messages" component={Messages} />
          <Route path="/notifications" component={Notification} />
          <Route path="/explore" component={Explore} />
          <Route path="/:username" component={Profile}/>  
          <Route path="/" component={Home} />
        </Switch>
      </Container>
      <EastNav/>
    </Router>
  );
};

export default Routing;
