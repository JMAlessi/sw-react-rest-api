import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/Autocomplete.css";

export default class Autocomplete extends Component {
  static propTypes = {
    showAutocomplete: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    autocomplete: PropTypes.array
  };

  render() {
    const { showAutocomplete, onClick } = this.props;

    return (
      <>
        {showAutocomplete ? (
          <div className="autocomplete-list">
            {this.props.autocomplete.length > 0 &&
              this.props.autocomplete.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="autocomplete-item"
                    onClick={() => onClick(item)}
                  >
                    {item.name}
                  </div>
                );
              })}
          </div>
        ) : null}
      </>
    );
  }
}
