import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { fetchGitHero } from "../../services/heroes.service";
import { connect } from "react-redux";
import { addHero } from "../../actions";

class AddHero extends Component {
  state = {
    hero: undefined,
    error: undefined
  };
  handleOnSubmit = e => {
    e.preventDefault();
    fetchGitHero(this.refs.userInput.value)
      .then(user => {
        this.setState({
          hero: user,
          error: undefined
        });
      })
      .catch(err => {
        this.setState({
          hero: undefined,
          error: err.message
        });
      });
  };

  handleClick = event => {
    this.props.addHero(this.state.hero);
    this.props.history.push("/");
  };

  render() {
    const hero = this.state.hero;
    return (
      <div>
        <h2>Enter a GitHub Username</h2>
        <form onSubmit={this.handleOnSubmit}>
          <input ref="userInput" className="search-page__input" type="text" />
          <input className="button" type="submit" value="Submit" />
        </form>
        {hero && (
          <div>
            <h2>{hero.name} Details!</h2>
            <label>id: </label>
            {hero.id} <br />
            <label>Bio: </label>
            {hero.bio} <br />
            <button
              className="btn btn-default"
              style={buttonStyle}
              onClick={this.handleClick}
            >
              Add me as a hero!
            </button>
          </div>
        )}
        {this.state.error && (
          <div>
            <h2>
              {"\u2639"}
              {this.state.error}
            </h2>
          </div>
        )}
      </div>
    );
  }
}
const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

const mapDispatchToProps = dispatch => ({
  addHero: bindActionCreators(addHero, dispatch)
});

export default connect(null, mapDispatchToProps)(AddHero);
