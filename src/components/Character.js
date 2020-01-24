import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Character extends Component {
  static propTypes = {
    character: PropTypes.shape({
      name: PropTypes.string,
      gender: PropTypes.string,
      birth_year: PropTypes.string
    }),
    homeworld: PropTypes.shape({
      planet_name: PropTypes.string
    })
  };

  render() {
    const { character, homeworld } = this.props;
    const { name, gender, birth_year } = character;
    const { name: planet_name } = homeworld;

    return (
      <>
        <h2>
          <u>Character Profile:</u>
        </h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Birth Year:</strong> {birth_year}
        </p>
        <p>
          <strong>Home Planet:</strong> {planet_name}
        </p>
      </>
    );
  }
}
