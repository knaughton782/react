import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { saveHero } from "../../actions";
import { bindActionCreators } from "redux";

class HeroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: this.props.hero
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.onSave(this.state.hero.id, this.state.hero.name);
    this.props.history.goBack();
  };
  //local state hero
  handleOnChange = event => {
    this.setState({
      hero: {
        ...this.state.hero,
        name: event.target.value
      }
    });
  };

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
          <input type="text" value={hero.name} onChange={this.handleOnChange} />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

HeroForm.propTypes = {};

const mapStatetoProps = (state, props) => {
  const heroId = parseInt(props.match.params.heroId, 10);
  return {
    hero: state.heroes.find(hero => hero.id === heroId)
  };
};

const mapDispatchToProps = dispatch => ({
  onSave: bindActionCreators(saveHero, dispatch)
});
export default connect(mapStatetoProps, mapDispatchToProps)(HeroForm);
