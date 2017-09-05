import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

//import HeroDetails from "../Heroes/HeroForm";
import { getHeroes } from "../../services/heroes.service";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Git Heroes",
      heroes: [],
      selectedHero: {
        name: "",
        id: undefined
      }
    };
  }

  componentWillMount() {
    getHeroes.then(payload => {
      this.setState({
        heroes: payload
      });
    });
  }

  render() {
    const heroBlocks = this.state.heroes.map(hero => (
      <Link key={hero.id} className="col-1-4" to={`heroes/details/${hero.id}`}>
        <div className="module hero">
          <h4>{hero.name}</h4>
        </div>
      </Link>
    ));
    return (
      <div>
        <h3>Top Heroes</h3>
        <div className="grid grid-pad">{heroBlocks}</div>
      </div>
    );
  }
}

export default Dashboard;
