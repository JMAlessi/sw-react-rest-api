import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../scss/Autocomplete.scss';

export default class Autocomplete extends Component {
	static propTypes = {
		showAutocomplete: PropTypes.bool.isRequired,
		onClick: PropTypes.func.isRequired,
		autocomplete: PropTypes.array,
	};

	render() {
		const { showAutocomplete, onClick } = this.props;

		return (
			<>
				{showAutocomplete && (
					<div className="autocomplete-list">
						{this.props.autocomplete &&
							this.props.autocomplete.map((item, index) => (
								<div
									key={index}
									className="autocomplete-item"
									onClick={() => onClick(item)}
								>
									{item.name}
								</div>
							))}
					</div>
				)}
			</>
		);
	}
}
