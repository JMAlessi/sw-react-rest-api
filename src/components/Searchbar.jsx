import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const { value, onChange } = this.props;

    return (
      <>
        <input
          type="text"
          placeholder="Search for a Star Wars character..."
          value={value}
          onChange={onChange}
        />
      </>
    );
  }
}
