import React, { Component } from "react";
import "./App.css";

//array of heroes given by Jesse
const HEROES = [
  { id: 11, name: "Mr. Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Git Heroes",
      heroes: HEROES,
      selectedHero: {
        name: "",
        id: undefined
      }
    };
    //explicit binding
    this.handleSelectHero = this.handleSelectHero.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  //method handling
  handleSelectHero(hero) {
    const heroIndex = this.state.heroes.map(o => o.id).indexOf(hero.id);
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
    const slHero = this.state.selectedHero;
    this.setState({
      heroes: [
        ...this.state.heroes.slice(0, slHero.index),
        { ...slHero },
        ...this.state.heroes.slice(slHero.index + 1, this.state.heroes.length)
      ]
    });
    event.preventDefault();
  }
  //every component must have a render and a return, every return must have a div
  render() {
    const heroList = this.state.heroes.map(function(hero) {
      //this return is inside...its not an extra return
      return (
        <li
          className=""
          key={hero.id}
          onClick={() => this.handleSelectHero(hero)}
        >
          <span className="badge">{hero.id}</span> {hero.name}
        </li>
      );
    }, this);
    //main return
    return (
      //everything here is wrapped in one div
      <div>
        <h1>{this.state.title}</h1>
        <ul className="heroes">{heroList} </ul>
        <div>
          <h2>{this.state.selectedHero.name} Details!!</h2>
          <div>
            <label>id: </label>
            {this.state.selectedHero.id}
          </div>

          <form onSubmit={this.handleOnSubmit}>
            <label>name: </label>
            <input
              type="text"
              value={this.state.selectedHero.name}
              onChange={this.handleOnChange}
            />
            <input className="button" type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default App;
