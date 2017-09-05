import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Heroes from "../Heroes";
//import HeroesList from "../Heroes.HeroesList"
import Dashboard from "../Dashboard";
import HeroForm from "../Heroes/HeroForm";

class App extends Component {
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
            <NavLink exact to="/addNew" activeClassName="active">
              Add New Hero
            </NavLink>
          </nav>
          <hr />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/heroes" component={Heroes} />
          <Route path={"/heroes/details/:heroId"} component={HeroForm} />
          <Route path="/addNew" component={HeroForm} />
        </div>
      </Router>
    );
  }
}

export default App;
