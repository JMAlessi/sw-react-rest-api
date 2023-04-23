import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import PlanetInfo from './PlanetInfo';

function Planets({ data }) {
	return (
		<>
			<h1>Planets</h1>
			<Grid columns={1}>
				{data.map((planet, i) => (
					<Grid.Column key={i}>
						<Card>
							<Card.Content>
								<Card.Header>{planet.name}</Card.Header>
								<Card.Description>
									<PlanetInfo planetInfo={planet} />
								</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				))}
			</Grid>
		</>
	);
}

export default Planets;
