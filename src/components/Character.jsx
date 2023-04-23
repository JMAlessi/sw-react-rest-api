import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Character extends Component {
	static propTypes = {
		character: PropTypes.shape({
			name: PropTypes.string,
			gender: PropTypes.string,
			birth_year: PropTypes.string,
		}),
		homeworld: PropTypes.shape({
			name: PropTypes.string,
		}),
	};

	static defaultProps = {
		character: {},
		homeworld: {},
	};

	render() {
		const { character, homeworld } = this.props;
		const { name, gender, birth_year } = character;
		const planet_name = homeworld?.name || 'Unknown';

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
