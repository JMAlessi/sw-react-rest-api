import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import PlanetInfo from './PlanetInfo.jsx';

export default function Planets({ data }) {
	return (
		<>
			<h1>Planets</h1>
			<Grid columns={1}>
				{data.map((planets, i) => {
					return (
						<Grid.Column key={i}>
							<Card>
								<Card.Content>
									<Card.Header>{planets.name}</Card.Header>
									<Card.Description>
										<PlanetInfo planetInfo={planets} />
									</Card.Description>
								</Card.Content>
							</Card>
						</Grid.Column>
					);
				})}
			</Grid>
		</>
	);
}
