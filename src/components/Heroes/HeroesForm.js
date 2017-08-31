import React from "react";

const HeroesForm = props => {
  return (
    <div>
      <div>
        <label>id: </label>
        {props.selectedHero.id}
      </div>

      <form onSubmit={props.handleOnSubmit()}>
        <label>name: </label>
        <input
          type="text"
          value={props.selectedHero.name}
          onChange={props.handleOnChange()}
        />
        <input className="button" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HeroesForm;
