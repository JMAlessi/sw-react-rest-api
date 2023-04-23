import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CharacterInfo extends Component {
	static propTypes = {
		characterInfo: PropTypes.shape({
			gender: PropTypes.string,
			birth_year: PropTypes.string,
		}),
	};

	constructor(props) {
		super(props);

		this.state = {
			expanded: false,
		};

		this.toggleInfo = this.toggleInfo.bind(this);
	}

	toggleInfo() {
		this.setState((prevState) => ({ expanded: !prevState.expanded }));
	}

	render() {
		const { characterInfo } = this.props;
		const { expanded } = this.state;

		if (!expanded) {
			return <button onClick={this.toggleInfo}>View info</button>;
		}

		return (
			<div>
				<ul>
					<li>
						<p>
							<strong>Gender:</strong> {characterInfo.gender}
						</p>
					</li>
					<li>
						<p>
							<strong>Birth year:</strong> {characterInfo.birth_year}
						</p>
					</li>
				</ul>
				<button onClick={this.toggleInfo}>Hide info</button>
			</div>
		);
	}
}

export default CharacterInfo;
