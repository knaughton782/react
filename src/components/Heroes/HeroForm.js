import React, { Component } from "react";
import { getHeroById } from "../../services/heroes.service";

class HeroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroId: parseInt(this.props.match.params.heroId, 10)
    };
  }

  componentWillMount() {
    getHeroById(this.state.heroId).then(payload => {
      console.log(payload);
      this.setState({
        hero: payload
      });
    });
  }

  render() {
    const hero = this.state.hero;
    if (!hero) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div>
          <h2>{hero.name} Details!</h2>
          <label>id: </label>
          {hero.id}
        </div>
        <form onSubmit={this.handleOnSubmit}>
          <label>name: </label>
          <input
            type="text"
            value={hero.name}
            onChange={this.props.handleOnChange}
          />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

HeroForm.propTypes = {};

export default HeroForm;
