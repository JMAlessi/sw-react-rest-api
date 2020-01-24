import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./Searchbar.js";
import Autocomplete from "./Autocomplete.js";
import Character from "./Character.js";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      autocomplete: [],
      showAutocomplete: false,
      character: {},
      homeworld: {}
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick(item) {
    const homeworld = item.homeworld;

    return axios
      .get(homeworld)
      .then(home => {
        this.setState({
          showAutocomplete: false,
          character: item,
          homeworld: home.data
        });
      })
      .catch(err => console.log("Error: ", err));
  }

  onChange(event) {
    this.setState({
      showAutocomplete: true,
      value: event.target.value
    });
    axios
      .get(`https://swapi.co/api/people/?search=${this.state.value}`)
      .then(character => {
        this.setState({
          autocomplete: character.data.results
        });
      })
      .catch(err => console.log("Error: ", err));
  }

  render() {
    const {
      value,
      autocomplete,
      showAutocomplete,
      character,
      homeworld
    } = this.state;
    return (
      <div className="home">
        <h1>A Star Wars React App made by J.M. Alessi</h1>
        <p>
          A sample React app written in JavaScript (ES6), which makes API calls
          to{" "}
          <a href="https://swapi.co" target="_blank">
            The Star Wars API
          </a>
          .
        </p>
        <p>
          Click the nav-links above to view a list of People, Planets or
          Starships. All of the information provided through this app is
          courtesy of The Star Wars API (an open-source resource).
        </p>
        <p>
          <strong>
            Feel free to search for characters belonging to the Star Wars
            franchise by typing in a name of your choice in the search bar
            below!
          </strong>
        </p>
        <Searchbar value={value} onChange={this.onChange} />
        <Autocomplete
          showAutocomplete={showAutocomplete}
          autocomplete={autocomplete}
          onClick={this.onClick}
        />
        <h3>Happy browsing!</h3>
        <Character character={character} homeworld={homeworld} />
      </div>
    );
  }
}
