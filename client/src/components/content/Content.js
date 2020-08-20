import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Topbar from "./Topbar";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Route exact path="/" component={() => ""} />
      <Route exact path="/Sort By-1" component={() => "Sort By-1"} />
      <Route exact path="/Sort By-2" component={() => "Sort By-2"} />
      <Route exact path="/Sort By-3" component={() => "Sort By-3"} />
      <Route exact path="/Sort By-4" component={() => "Sort By-4"} />
      <Route exact path="/Sort By-5" component={() => "Sort By-5"} />
      <Route exact path="Sort By-6" component={() => "Sort By-6"} />

      
    </Switch>
  </Container>
);

export default Content;
