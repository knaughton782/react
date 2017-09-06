import React, { Component } from "react";
import { connect } from "react-redux";
import "./Hero.css";

import HeroesList from "./HeroesList";
import AddHero from "./AddHero";
import { Route, Link } from "react-router-dom";

import { getHeroes } from "../../services/heroes.service";

const DEFAULT_NO_HERO = {
  name: "",
  id: undefined
};

class Heroes extends Component {
  constructor() {
    super();
    this.state = {
      selectedHero: DEFAULT_NO_HERO
    };

    //explicit binding
    this.handleSelectHero = this.handleSelectHero.bind(this);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  //hero keeps a copy of a local state
  handleSelectHero(hero) {
    const heroIndex = this.props.heroes.map(o => o.id).indexOf(hero.id);
    hero = this.state.selectedHero.id !== hero.id ? hero : DEFAULT_NO_HERO;
    this.setState({
      selectedHero: {
        ...hero,
        index: heroIndex
      }
    });
  }

  handleOnChange(event) {
    this.setState({
      selectedHero: {
        ...this.state.selectedHero,
        name: event.target.value
      }
    });
  }

  handleOnSubmit(event) {
    //create const to clean up code
    //const slHero = this.state.selectedHero;
    //const heroes = this.state.heroes;
    this.setState({
      heroes: [
        ...this.state.heroes.slice(0, this.state.selectedHero.index),
        { id: this.state.selectedHero.id, name: this.state.selectedHero.name },
        ...this.state.heroes.slice(
          this.state.selectedHero.index + 1,
          this.state.heroes.length
        )
      ],
      selectedHero: DEFAULT_NO_HERO
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <HeroesList
          heroes={this.props.heroes}
          selectedHero={this.state.selectedHero}
          onHeroClick={this.handleSelectHero}
        />
        {this.state.selectedHero.name && (
          <div>
            <h2>{this.state.selectedHero.name}</h2>
            <Link to={`/heroes/details/${this.state.selectedHero.id}`}>
              <button>Details</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
const mapStatetoProps = state => ({
  heroes: state.heroes
});

export default connect(mapStatetoProps)(Heroes);
