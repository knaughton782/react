import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Heroes from "../Heroes";
import Dashboard from "../Dashboard";
import HeroForm from "../Heroes/HeroForm";
import AddHero from "../Heroes/AddHero";

import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <h1>Git Heroes</h1>
          <nav>
            <NavLink exact to="/" activeClassName="active">
              Dashboard
            </NavLink>
            <NavLink exact to="/heroes" activeClassName="active">
              Heroes
            </NavLink>
            <NavLink exact to="/heroes/add" activeClassName="active">
              Add Hero
            </NavLink>
          </nav>
          <hr />

          <Route exact path="/" component={Dashboard} />
          <Route exact path="/heroes" component={Heroes} />
          <Route path="/heroes/add" component={AddHero} />
          <Route path={"/heroes/details/:heroId"} component={HeroForm} />
        </div>
      </Router>
    );
  }
}

export default App;
//exact path keeps two pages from rendering on the same page
//semi colon tells router that we are setting it up as a match params to be used later...also creates a string which requires parseInt later...radix:second parameter is 10
