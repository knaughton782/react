import React, { Component } from "react";
import "./Hero.css";
//import HeroForm from "./HeroForm";
import HeroesList from "./HeroesList";

//import { Route } from "react-router-dom";

import { getHeroes } from "../../services/heroes.service";

const DEFAULT_NO_HERO = {
  name: "",
  id: undefined
};

class Heroes extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
      selectedHero: DEFAULT_NO_HERO
    };

    //explicit binding
    this.handleSelectHero = this.handleSelectHero.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentWillMount() {
    getHeroes.then(payload => {
      this.setState({
        heroes: payload
      });
    });
  }
  //method handling

  handleSelectHero(hero) {
    const heroIndex = this.state.heroes.map(o => o.id).indexOf(hero.id);
    hero = this.state.selectedHero.id !== hero.id ? hero : DEFAULT_NO_HERO;
    this.setState({
      selectedHero: {
        ...hero,
        index: heroIndex
      }
    });
    console.log(this.state.selectedHero.name);
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
    const slHero = this.state.selectedHero;
    const heroes = this.state.heroes;
    this.setState({
      heroes: [
        ...heroes.slice(0, slHero.index),
        { ...slHero },
        ...heroes.slice(slHero.index + 1, heroes.length)
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
          heroes={this.state.heroes}
          selectedHero={this.state.selectedHero}
          onHeroClick={this.handleSelectHero}
        />
      </div>
    );
  }
}

export default Heroes;
