import React from 'react';
import PropTypes from 'prop-types';

function Searchbar({ value, onChange }) {
	return (
		<input
			type="text"
			placeholder="Search for a Star Wars character..."
			value={value}
			onChange={onChange}
		/>
	);
}

Searchbar.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Searchbar;
