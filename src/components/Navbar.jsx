import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<Menu inverted>
			<Container>
				<Link to="/">
					<Menu.Item name="Home" />
				</Link>
				<Link to="/people.jsx">
					<Menu.Item name="People" />
				</Link>
				<Link to="/planets.jsx">
					<Menu.Item name="Planets" />
				</Link>
				<Link to="/starships.jsx">
					<Menu.Item name="Starships" />
				</Link>
			</Container>
		</Menu>
	);
}
