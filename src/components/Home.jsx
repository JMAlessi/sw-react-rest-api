import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import Autocomplete from './Autocomplete';
import Character from './Character';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			autocomplete: [],
			showAutocomplete: false,
			character: {},
			homeworld: {},
			error: null,
		};

		this.onClick = this.onClick.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onClick(item) {
		const homeworld = item.homeworld;

		axios
			.get(homeworld)
			.then((home) => {
				this.setState({
					showAutocomplete: false,
					character: item,
					homeworld: home.data,
					error: null,
				});
			})
			.catch((err) => {
				console.log('Error: ', err);
				this.setState({
					error: 'Error occurred while loading data. Please try again later.',
				});
			});
	}

	onChange(event) {
		const value = event.target.value;
		this.setState({
			showAutocomplete: true,
			value,
			error: null,
		});
		axios
			.get(`https://swapi.dev/api/people/?search=${value}`)
			.then((response) => {
				this.setState({
					autocomplete: response.data.results,
					error: null,
				});
			})
			.catch((err) => {
				console.log('Error: ', err);
				this.setState({
					error: 'Error occurred while loading data. Please try again later.',
				});
			});
	}

	render() {
		const {
			value,
			autocomplete,
			showAutocomplete,
			character,
			homeworld,
			error,
		} = this.state;

		return (
			<div className="home">
				<h1>sw-rest-app</h1>
				<p>
					A sample application for for making API calls to{' '}
					<a
						href="https://swapi.dev"
						target="_blank"
					>
						The Star Wars API
					</a>
					.
				</p>
				<p>
					Click the links above to view a list of People, Planets or Starships.
					All of the data rendered is provided open-source from The Star Wars
					API.
				</p>
				<p>
					<strong>Search by typing something in the search bar below.</strong>
				</p>
				<Searchbar
					value={value}
					onChange={this.onChange}
				/>
				{error ? (
					<p className="error">{error}</p>
				) : (
					<Autocomplete
						showAutocomplete={showAutocomplete}
						autocomplete={autocomplete}
						onClick={this.onClick}
					/>
				)}
				<h3>~ J. A.</h3>
				{Object.keys(character).length > 0 && (
					<Character
						character={character}
						homeworld={homeworld}
					/>
				)}
			</div>
		);
	}
}

export default Home;
